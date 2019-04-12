var gulp = require('gulp'); // Подключаем Gulp
var less = require('gulp-less');//Подключаем Sass пакет,
var browserSync = require('browser-sync'); // Подключаем Browser Sync
var plumber = require('gulp-plumber');// выводит ошибки в консоли
var postcss  = require('gulp-postcss');
var concat = require('gulp-concat'); // Подключаем gulp-concat (для конкатенации файлов)
var uglify = require('gulp-uglifyjs'); // Подключаем gulp-uglifyjs (для сжатия JS)
var autoprefixer = require('autoprefixer'); 
var minify = require('gulp-csso');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');

gulp.task('less', function(){ // Создаем таск Sass
    return gulp.src('app/less/main.less') // Берем источник
        .pipe(less()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(plumber())
        .pipe(postcss([ autoprefixer({
        	browsers: ['last 7 versions'],
            cascade: false}) ]))
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true}))  // Обновляем CSS на странице при изменении
        .pipe(minify())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest('dist/css')); 

});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('scripts', function() {
    return gulp.src([ // Берем все необходимые библиотеки
        'app/*.js'
        ])
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
});

gulp.task('code', function() {
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('images', function(){
    return gulp.src("app/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
        imagemin.optipng({optimizationLevel:3}),
        imagemin.jpegtran({progressive:true}),
        imagemin.svgo()
    ]))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch',  function() {
    gulp.watch('app/less/main.less', gulp.parallel('less')); // Наблюдение за sass файлами
    gulp.watch('app/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
    gulp.watch(['app/js/common.js', 'app/libs/**/*.js'], gulp.parallel('scripts'));
    // Наблюдение за другими типами файлов
});

gulp.task('default', gulp.parallel('watch', 'browser-sync' , 'less'));

gulp.task('build', gulp.parallel('less', 'images'));