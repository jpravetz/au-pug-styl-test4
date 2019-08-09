import { build } from 'aurelia-cli';
import * as gulp from 'gulp';
import * as project from '../aurelia.json';
import * as pug from 'gulp-pug';
import * as htmlmin from 'gulp-htmlmin';
import * as changedInPlace from 'gulp-changed-in-place';

export default function processMarkup() {
  return gulp
    .src(project.markupProcessor.source)
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(pug())
    .pipe(
      htmlmin({
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      })
    )
    .pipe(build.bundle());
}

/** 

import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import changedInPlace from 'gulp-changed-in-place';
import pug from 'gulp-pug';
import project from '../aurelia.json';
import { build } from 'aurelia-cli';

export default function processMarkup() {
  return gulp
    .src(project.markupProcessor.source)
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(pug())
    .pipe(
      htmlmin({
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      })
    )
    .pipe(build.bundle());
}
*/
