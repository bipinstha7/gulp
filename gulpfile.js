 const gulp = require('gulp');
 const imagemin = require('gulp-imagemin');

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
 // only gulp -- because of default arg
 gulp.task('default', () => {
  return console.log('gulp is running...');
});


// copy all html files
gulp.task('copyhtml', () => {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

