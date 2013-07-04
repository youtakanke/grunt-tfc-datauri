module.exports = function(grunt) {
	grunt.initConfig({
		tfcDatauri : {
			test_1 : {
				file : './test/tfc_publish_file.html',
				dest : './test/manifest/manifest.js',
				options : {
					log : true
					//処理中のlogをconsoleに表示します
				}
			},
			test_2 : {
				file : './test/tfc_publish_file.html',
				options : {
					log : true
					//処理中のlogをconsoleに表示します
				}
			}
		}
	})
	grunt.loadTasks('tasks');
};
