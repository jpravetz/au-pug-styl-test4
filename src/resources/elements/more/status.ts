import 'msub';
import { isNumber, isNonEmptyArray } from 'epdoc-util';

const VALRULES = {
  title: {
    name: 'Status Component',
    type: 'filename',
    required: true,
    min: 1,
    max: 256,
    label: 'title'
  }
};

export class StatusCustomElement {
  title: string;
  message: string;

  constructor() {}

  bind() {
    this.title = 'Status component';
    this.message = 'Hello ${name}, from status!'.msub({ name: 'Frank' });
  }

  attached() {
    console.log('attached status');
    let x = isNumber(3) ? true : false;
    let y = isNonEmptyArray(null);

    // Testing the ability to add @types/google.visualization
    let a = google.visualization;
    google.charts.load('current', { packages: ['corechart'] });
    let canSetImmediate = typeof window !== 'undefined' && window.setImmediate;
  }
}
