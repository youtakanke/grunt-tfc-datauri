var grunt = require('grunt');
var fs = require('fs');
var gruntTextReplace = {};

var IMAGES = {
	png: 'image/png',
	gif: 'image/gif',
	jpg: 'image/jpeg',
	jpeg: 'image/jpeg'
};

module.exports = function(grunt){
	grunt.registerTask('tfcDatauri', 'toolkit for createjs images change datauri', function() {
		var _config = grunt.config('tfcDatauri');
		for(var _index in _config){
			var _data = _config[_index];
			var _loadFile = _data.file;
			var _src = grunt.file.read(_loadFile);
			_data.options = _data.options || {};
			var _varName = _data.options.varName || 'manifest';
			var _startManifest = _src.match(new RegExp('var ' + _varName + ' ?='));
			var _isLog = _data.options.log || false;
			
			if(_startManifest===null){
				grunt.fail.warn('No such  " ' + _varName +' "  object !!');
				return;
			}
			_startManifest = _startManifest.input.match(/['"]?src+['"]? ?:/);
			var _finishManifest = _startManifest.input.match(/]/);
			//manifestデータ抽出
			var _manifest = _startManifest.input.substring(_startManifest.index-1, _finishManifest.index + 1);
			
			//base64化されたデータ格納用
			var _resultManifest = _data.dest ? 'var ' + _varName + ' = [\n' : '';
			
			var _imagesObj = _manifest.split(/}/);
			_imagesObj.shift();
			_imagesObj.pop();
			for (var i=0; i < _imagesObj.length; i++) {
				var _img = _imagesObj[i].split(/['"]?src+['"]? ?:/)[1];
				_img = _img.split(/['"]/)[1];
				var _id =  _imagesObj[i].split(/['"]?id+['"]? ?:/)[1];
				_id = _id.split(/['"]/)[1];
				var _dir = '';
				if(!_img.match(/^\//)){
					if(_loadFile.indexOf('/') > 0){
						var _ar = _loadFile.split('/');
						_ar.pop();
						_dir = _ar.join('/') + '/';
					}
				}
				if(_isLog)
					grunt.log.write(i , _id, _img ,'\n')
				var _mimeType = gruntTfcDatauri.getImageMimeType(_img);
				var _base64 = gruntTfcDatauri.encode(_dir + _img);
				var _dataUri = 'data:' + _mimeType + ';base64,' + _base64;
				
				_resultManifest += '{"id":"'+ _id + '", "type":createjs.PreloadJS.IMAGE, "src":"' + _dataUri + '"}';
				if(i < _imagesObj.length - 1)
				_resultManifest += ',\n';
			};
			_resultManifest += '\n];';
			
			if(_data.dest){
				//manifest json書き出し
				grunt.file.write(_data.dest, _resultManifest);
				grunt.log.write('*** create manifest file : ' + _data.dest + ' ***\n');
			}else{
				//destが無い場合、上書き
				grunt.file.write(_data.file, _src.replace(_manifest, _resultManifest));
				grunt.log.write('*** override manifest json : ' + _data.file + ' ***\n');
			}
		}
	})
}
gruntTfcDatauri = {
	getImageMimeType : function(file) {
		for (var name in IMAGES) {
			if (file.lastIndexOf('.' + name) > 0) {
				return IMAGES[name];
			}
		}
		return null;
	},
	
	encode : function(path) {
		if(grunt.file.isFile(path)){
			return new Buffer(fs.readFileSync(path)).toString('base64');
		}else{
			grunt.fail.fatal('Such files could not be found ' + path);
			return 'noFile';
		}
	},
	createJson : function(dir, name) {
		fs.readdir(dir, function(err, files) {
			var json = null;
	
			for (var i = 0, length = files.length; i < length; i++) {
				var file = files[i],
					path = dir + '/' + file;
	
				if (fs.statSync(path).isDirectory()) {
					createJson(path);
				} else {
					var mimeType = gruntTfcDatauri.getImageMimeType(path);
					if (mimeType) {
						if (json === null) json = {};
	
						var key = file.substring(0, file.indexOf('.')),
							value = 'data:' + mimeType + ';base64,' + gruntTfcDatauri.encode(path);
	
						json[key] = value;
					}
	
				}
			}
	
			if (json) {
				var fileName = dir.replace(ROOT_PATH + '/', '').replace('/', '_') + '.json';
				var distPath = DIST_PATH + '/' + fileName;
				console.log('create json: ' + distPath);
	
				fs.writeFile(distPath, global.JSON.stringify(json));
			}
		});
	}
}
