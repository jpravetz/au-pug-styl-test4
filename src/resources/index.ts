/* This is a generated file */
import elements from './elements/index';

import { FrameworkConfiguration } from 'aurelia-framework';

let resources = [];
elements.forEach((module) => {
  resources.push('./elements/' + module);
});

export function configure(config:FrameworkConfiguration) {
  config.globalResources(resources);
}
