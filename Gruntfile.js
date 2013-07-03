module.exports = function(grunt) {
	grunt.initConfig({
		tfcDatauri : {
			testfile : {
				file : './test/tfc_publish_file.html',
				dest : './test/manifest.js',
				options : {
					log : true,
					//処理中のlogをconsoleに表示します
					varName : 'foo' // var foo =[ ~
					//変数名が'manifest'以外の場合はvarNameで指定します。
				}
			}
		}
	})
	grunt.loadTasks('tasks');
};
