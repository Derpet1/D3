// Старі таски залишено закоментованими
// exports.myTask = (callback) => {
//   console.log('Task 1: Hello Spanchuk!');
//   callback();
// };

// exports.myTask2 = async () => {
//   console.log('Task 2: Hello Spanchuk!');
// };

// exports.myTask3 = async () => {
//   console.log('Task 3: Hello Spanchuk!');
// };

// exports.myTask4 = async () => {
//   console.log('Task 4: Hello Spanchuk!');
// };

const gulp = require('gulp');
const minifyCSS = require('gulp-minify-css');
const uglify = require('gulp-uglify');

gulp.task('minifyCSS', () => {
    return gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('public/css'));
});

gulp.task('minifyJS', () => {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

gulp.task('default', gulp.parallel('minifyCSS', 'minifyJS'));


const gulp = require('gulp');

exports.cloneFiles = async () => {
  console.log('Копіювання HTML та CSS файлів з app/ в public...');
  return gulp.src(['app/*.html', 'app/*.css']) // Додаємо CSS
    .pipe(gulp.dest('public'));
};
