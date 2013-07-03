[![build status](https://secure.travis-ci.org/jharding/grunt-exec.png)](http://travis-ci.org/jharding/grunt-exec)
grunt-tfc-datauri
=================


Getting Started
---------------

This plugin requires Grunt ~0.4.0

Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-tfc-datauri`

Then add this line to your project's `gruntfile.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-tfc-datauri');
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

Documentation
-------------

Flashのextensionである、「Toolkit for CreateJS」（※以降 TFC ）を使用したプロジェクトで、
image画像を大量に使用している場合、スマートフォンでは画像のリクエストが増えてしまい、
3G回線端末などではロードに時間がかかってしまいます。

そこで画像データをdatauriで使用することによってリクエストを大幅に減らし、
ロード時間を短縮するテクニックがあります。

このpluginは、TFCでpublishされたhtml内の`var manifest`jsonに記述されている画像パスに基づき、
画像をbase64化します。
そしてそのデータをhtmlに上書きします。
もしくは任意のファイルに出力します。

### Example1

TFCによってpublishされたhtmlを上書きする場合

```javascript
grunt.initConfig({

  tfcDatauri: {
    testfile:{
      file:'./test/tfc_publish_file.html'
    }
  }
});
```
html内のmanifest変数部分が、画像パスからdatauriに変わります。


### Example2 (dest)
data uri化したデータを任意のファイルに出力します。

```javascript
grunt.initConfig({

  tfcDatauri: {
    testfile:{
      file:'./test/tfc_publish_file.html',
      dest:'./test/manifest.js'
    }
  }
});
```
`./test/manifest.js`が出力され、ここにdata uri化したデータが記述されます。


### Example3(options)
optionsの指定で、manifestという変数名を変更できます。

```javascript
grunt.initConfig({

  tfcDatauri: {
    testfile:{
      file:'./test/tfc_publish_file.html',
      dest:'./test/manifest.js',
      options:{
        log:true,
        //処理中のlogをconsoleに表示します
        varName:'foo' // var foo =[ ~
        //変数名が'manifest'以外の場合はvarNameで指定します。
      }
    }
  }
});
```





License
-------

Copyright (c) 2013 Yota Kanke
Licensed under the MIT license.

blog
----
- blog http://kf-plvs-vltra.com/blog/
