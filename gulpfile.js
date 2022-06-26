const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const pug = require("gulp-pug")
const concat = require("gulp-concat")
//const js = require("gulp-typescript")
//const ts = require('gulp-typescript');
const browsersync = require("browser-sync").create()

gulp.task("sass", () => {
    return gulp.src('src/sass/**/*.sass')
                    .pipe(sass().on("error", sass.logError))
                    .pipe(gulp.dest("docs/css/"))
})

gulp.task("pug", () => {
    return gulp.src('src/*.pug')
                    .pipe(pug())
                    .pipe(gulp.dest("docs/"))
})

gulp.task("scripts", () => {
    return gulp.src("src/script/*.js")
                        .pipe(concat("all.js"))
                        .pipe(gulp.dest("docs/script/"))
})

gulp.task("default", () => {
    gulp.watch("src/**/*.pug", gulp.series("pug"))
    gulp.watch("src/sass/**/*.sass", gulp.series("sass"))
    gulp.watch("src/script/**/*.js", gulp.series("scripts"))
    gulp.watch("docs/**/*.html").on("change", browsersync.reload)
    gulp.watch("docs/script/**/*.js").on("change", browsersync.reload)
    gulp.watch("docs/css/**/*.css").on("change", browsersync.reload)
    browsersync.init({
        server: {
            baseDir: "./docs"
        }
    })
})