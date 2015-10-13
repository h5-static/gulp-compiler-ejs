var gulp = require("gulp");
var GulpCompiler = require("./index.js"); 

gulp.task('test', function(cb) {
  gulp.src([ "ejs" + "/**/*.ejs"])
  	.pipe(GulpCompiler({
  		test:1
  	}))
    .pipe(gulp.dest("html/"));
});

gulp.task('default', ["test"]);