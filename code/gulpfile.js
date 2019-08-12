var gulp = require('gulp'),
    fileinclude = require('gulp-file-include'),
    watch = require('gulp-watch'),
    sass  = require("gulp-sass");

gulp.task("sass", function(){
  return gulp.src("styles/style.scss")
      .pipe(sass())
      .pipe(gulp.dest("styles/"));
});

gulp.task("htmlIndex", function(){
  return gulp.src("html/index.html")
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('../'));
});

gulp.task("htmlTeachingPortfolio", function(){
  return gulp.src("teachingPortfolio/teachingPortfolio.html")
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('../'));
});


// Watch asset folder for changes
gulp.task("default", function() {
  gulp.watch("styles/*.scss", gulp.registry().get("sass"));
  gulp.watch("html/*.html", gulp.registry().get("htmlIndex"));
  gulp.watch("teachingPortfolio/*.html", gulp.registry().get("htmlTeachingPortfolio"));
});
