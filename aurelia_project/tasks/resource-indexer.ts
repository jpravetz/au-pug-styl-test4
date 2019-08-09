import * as gulp from 'gulp';
import * as project from '../aurelia.json';
import * as IndexGenerator from 'aurelia-resource-index';

function generateResourceIndexFiles(done) {
  let config = project.resourceIndexer;
  let generator = new IndexGenerator(config, project.paths.root, project.paths.resources);
  generator
    .run()
    .then(resp => {
      done();
    })
    .catch(err => {
      done(err);
    });
}

const run = gulp.series(generateResourceIndexFiles);

export { run as default };
