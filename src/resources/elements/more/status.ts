import 'msub';

const VALRULES = {
  title: {
    name: 'title',
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
    this.title = 'Insert';
    this.message = 'Hello ${name}, from status!'.msub({ name: 'Frank' });
  }

  attached() {
    console.log('attached status');
  }
}
