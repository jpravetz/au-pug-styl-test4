import { msub } from 'msub';
msub.init();

export class App {
  private opts = {
    name: 'Jim',
    msg: 'Hello'
  };
  private s = '${msg} : ${name}'.msub(this.opts);
  public message: string = this.s;

  attached() {
    console.log('attached app');
  }
}
