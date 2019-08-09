import gulp from 'gulp';
import changedInPlace from 'gulp-changed-in-place';
import project from '../aurelia.json';

export default function copyImages () {
  console.log(`Copying images to ${project.platform.output}/images`);
  const taskImages = gulp.src('src/assets/images/**/*')
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest(`${project.platform.output}/images`));

  return taskImages;
}
