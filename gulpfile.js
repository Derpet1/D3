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

exports.cloneFiles = async () => {
  console.log('Копіювання HTML та CSS файлів з app/ в public...');
  return gulp.src(['app/*.html', 'app/*.css']) // Додаємо CSS
    .pipe(gulp.dest('public'));
};
