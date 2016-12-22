var composer_json         = require('./composer.json');
var gulp          = require('gulp');
var plumber       = require('gulp-plumber');
var sass          = require('gulp-sass');
var uglify        = require('gulp-uglify');
var imagemin      = require('gulp-imagemin');
var pngcrush      = require('imagemin-pngcrush');
var include       = require('gulp-include');
var autoprefixer  = require('gulp-autoprefixer');
var pixrem        = require('gulp-pixrem');
var notify        = require('gulp-notify');
var cleanCSS      = require('gulp-clean-css');
var sourcemaps    = require('gulp-sourcemaps');
var browserSync   = require("browser-sync").create();
var concat        = require('gulp-concat');
var bump          = require('gulp-bump');
var replace       = require('gulp-string-replace');
var exec            = require('child_process').exec;


// browser sync proxy url: e.g. a vhost-based url,
// see also: https://www.browsersync.io/docs/options#option-proxy
var bsProxy       = "http://localhost:8888/projects";

var version = composer_json.version;

var paths = {
    src: {
        styles:     'src/scss/default.scss',
        scripts:    ['node_modules/object-fit-images/dist/ofi.browser.js','src/js/**/*.js'],
        images:     'src/img/**/*',
        fonts:      'src/fonts/**/*',
        templates:  'src/templates/**/*'
    },
    dist: {
        styles:     'dist/static/'+version+'/css',
        scripts:    'dist/static/'+version+'/js',
        images:     'dist/static/'+version+'/img',
        fonts:      'dist/static/'+version+'/fonts',
        templates:  'dist/TL_ROOT/templates/etgwebkit'
    },
    watch: {
        styles:     'src/scss/**/*.scss',
        scripts:    'src/js/**/*.js',
        images:     'src/img/**/*',
        templates:  'dist/TL_ROOT/templates/**/*'
    }
};

// reading your sass files, add autoprefixer options, create sourcemaps, generate css file, inject css via browser-sync
gulp.task('styles', function() {
    gulp.src(paths.src.styles)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
    			browsers: ['last 3 versions'],
    			cascade: false
    		}))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(paths.dist.styles))
        .pipe(browserSync.stream({match: '**/*.css'}));
});

// nearly the same that ['styles'] does, but adding pixrem fallback and minify css via cleanCSS
gulp.task('minify_css', function() {
    gulp.src(paths.src.styles)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
    			browsers: ['last 3 versions'],
    			cascade: false
    		}))
        .pipe(cleanCSS())
        .pipe(pixrem({ rootValue: '16px' }))
        .pipe(gulp.dest(paths.dist.styles))
});

// read, combine and uglyify js
gulp.task('scripts', function() {
    gulp.src(paths.src.scripts)
    	.pipe(include())
        .pipe(uglify())
        .pipe(concat('helpers.js'))
        .pipe(gulp.dest(paths.dist.scripts))
});

// read and optimize images
gulp.task('images', function () {
    return gulp.src(paths.src.images)
        .pipe(imagemin({
          progressive: true
        }))
        .pipe(gulp.dest(paths.dist.images));
});

gulp.task('templates',function(){
   return gulp.src(paths.src.templates)
       .pipe(replace('{{version}}',composer_json.version))
       .pipe(gulp.dest(paths.dist.templates))
});

// copy static files from src to dist
gulp.task('copy', function() {
   gulp.src(paths.src.fonts)
   .pipe(gulp.dest(paths.dist.fonts));
});

// watcher task
gulp.task('serve', ['styles'], function() {
    // https://www.browsersync.io/docs/gulp#gulp-sass-maps
    browserSync.init({
        proxy: bsProxy,
        open: false
    });

    gulp.watch(paths.watch.styles,  ['styles']);
    gulp.watch(paths.watch.templates).on('change', browserSync.reload);
    gulp.watch(paths.watch.scripts, ['scripts']).on('change', browserSync.reload);
});

//bumper
gulp.task('bump', function(){
    gulp.src(['./package.json','./composer.json'])
        .pipe(bump())
        //.pipe(bump("major"))
        //.pipe(bump("minor"))
        //.pipe(bump("patch")) //default
        .pipe(gulp.dest('./'));
});


gulp.task('adjustLatestSymlink', function(){

    exec('rm dist/static/latest');
    console.log(version);
    exec('ln -s dist dist/static/latest');
});

gulp.task('default', ['serve']);
gulp.task('deploy', ['minify_css', 'scripts', 'images','templates']);
gulp.task('version', ['bump','deploy','adjustLatestSymlink']);