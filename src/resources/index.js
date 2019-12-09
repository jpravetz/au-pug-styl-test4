/* This is a generated file */
import elements from './elements/index';

let resources = [];
elements.forEach((module) => {
  resources.push('./elements/' + module);
});

export function configure (config) {
  config.globalResources(resources);
}
