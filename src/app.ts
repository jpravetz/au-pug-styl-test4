import { msub } from 'msub';
msub.init();

export class App {
  loaded = false;
  private opts = {
    name: 'Jim',
    msg: 'Hello'
  };
  private s = '${msg} : ${name}'.msub(this.opts);
  public message: string = this.s;
  showAlt = true;

  attached() {
    console.log('attached app');
    this.loaded = true;
  }
}
