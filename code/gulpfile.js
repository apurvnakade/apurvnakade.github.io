var gulp = require('gulp'),
    fileinclude = require('gulp-file-include'),
    watch = require('gulp-watch'),
    gulp  = require("gulp"),
    sass  = require("gulp-sass"),
    del   = require("del");

gulp.task('fileinclude', function() {
  return gulp.src(['html/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('../'));
});

gulp.task('default', function () {
    return gulp.src('html/*')
        .pipe(watch('**/*.html'))

        // .pipe(gulp.dest('build'));
});


    // Watch asset folder for changes
    gulp.task("watch", done => {
        // Compile SCSS files to CSS
        gulp.watch("sass/*", function () {
            del(["style.css"]);
            return gulp.src("sass/style.scss")
                .pipe(sass())
                .pipe(gulp.dest("."));
        });
        done();
        // gulp.watch("src/js/**/*", function() {
        //     del(["static/js/**/*"])
        //     return gulp.src("src/js/**/*")
        //         .pipe(gulp.dest("static/js"))
        // })
    });
