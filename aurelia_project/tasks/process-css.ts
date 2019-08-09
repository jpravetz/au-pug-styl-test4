import {build} from 'aurelia-cli';
import * as gulp from 'gulp';
import * as project from '../aurelia.json';
import * as plumber from 'gulp-plumber';
import * as notify from 'gulp-notify';
import * as stylus from 'gulp-stylus';
import * as postcss from 'gulp-postcss';
import * as autoprefixer from 'autoprefixer';
import * as cssnano from 'cssnano';
import * as postcssUrl from 'postcss-url';

export default function processCSS() {
  return gulp.src(project.cssProcessor.source, {sourcemaps: true, since: gulp.lastRun(processCSS)})
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(stylus())
    .pipe(postcss([
      autoprefixer(),
      postcssUrl({url: 'inline', encodeType: 'base64'}),
      cssnano()
    ]))
    .pipe(build.bundle());
}

