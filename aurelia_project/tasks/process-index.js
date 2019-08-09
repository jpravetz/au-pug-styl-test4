import gulp from 'gulp';
import replace from 'gulp-replace';
import project from '../aurelia.json';
import {CLIOptions} from 'aurelia-cli';

function getReplacements () {
  let env = CLIOptions.getEnvironment();
  let configPath = `../environments/${env}${project.transpiler.fileExtension}`;
  return import(configPath)
    .then((module) => {
      return module.default.index.replace;
    });
}

function processIndex () {
  let task = gulp.src('index.html');

  return getReplacements()
    .then((replacements) => {
      replacements.forEach((item) => {
        console.log('replace', item);
        task = task.pipe(replace(item[0], item[1]));
      });
      task.pipe(gulp.dest('./'));
      return Promise.resolve(task);
    });
}

export default processIndex;
