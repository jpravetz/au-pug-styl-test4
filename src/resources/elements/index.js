/* This is a generated file */
import more from './more/index';

let resources = [
  'mybox'
];
more.forEach((module) => {
  resources.push('more/' + module);
});

export default resources;
