var through = require('through2');
var gutil = require('gulp-util');

var PluginError = gutil.PluginError;
var Compiler = require('h5-compiler-ejs');

module.exports = function(handler,options){
    options = options || {};
    handler = handler || {};
    var ext = options.ext ? options.ext : ".html";
    var stream = through.obj(function(file, enc, cb) {
        var _self = this;
        new Compiler(file.contents.toString(),handler,{path:file.path},function(fileStream){
            file.contents = fileStream;
             file.path = gutil.replaceExtension(file.path, ext);
            _self.push(file);
            cb();
        });
    });

    return stream;
}
