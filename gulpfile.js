 const gulp = require('gulp');
 const imagemin = require('gulp-imagemin');
 const uglify = require('gulp-uglify');
 const sass = require('gulp-sass');
 const concat = require('gulp-concat');

 /*
 --- TOP LEVEL FUNCTIONS ---
      gulp.tasks -- Define tasks
      gulp.src -- Point to files to use
      gulp.dest -- Points to folder to output
      gulp.watch -- Watch files and folders for changes

 */

 // LOGS message

 // gulp message in terminal
 gulp.task('message', () => {
   return console.log('gulp is running...');
 });


// copy all html files
gulp.task('copyhtml', () => {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

// optimize images
gulp.task('imageMin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

// minify js -- this part is done by concat and uglify
// gulp.task('minify', () => {
//   gulp.src('src/js/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/js'));
// });

// compile sass
gulp.task('sass', () => {
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// script concat
gulp.task('scripts', () => {
  gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
}); 

 // only gulp -- because of default arg
 // compile all task at once
 gulp.task('default', ['message', 'copyhtml', 'imageMin', 'sass', 'scripts']);
