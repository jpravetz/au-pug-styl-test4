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

export class MyboxCustomElement {
  title: string;
  message: string;

  constructor() {}

  bind() {
    this.title = 'Insert';
    this.message = 'Hello ${name}, from insert!'.msub({ name: 'Frank' });
  }

  attached() {
    console.log('attached mybox');
  }
}
