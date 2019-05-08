var gulp = require('gulp'),
    fileinclude = require('gulp-file-include'),
    watch = require('gulp-watch'),
    sass  = require("gulp-sass");

gulp.task("sass", function(){
  return gulp.src("styles/style.scss")
      .pipe(sass())
      .pipe(gulp.dest("styles/"));
});

gulp.task("html", function(){
  return gulp.src("html/index.html")
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('../'));
});


// Watch asset folder for changes
gulp.task("default", function() {
  gulp.watch("sass/*", gulp.registry().get("sass"));
  gulp.watch("html/*", gulp.registry().get("html"));
});
