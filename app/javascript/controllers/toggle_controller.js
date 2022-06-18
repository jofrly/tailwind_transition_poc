import { Controller } from "@hotwired/stimulus";
import { enter, leave } from 'el-transition';

export default class extends Controller {
  static targets = [
    'modal',
    'backdrop',
    'panel'
  ];

  show() {
    this.modalTarget.classList.remove('hidden');
    enter(this.backdropTarget);
    enter(this.panelTarget);
  }

  hide() {
    Promise.all([
      leave(this.backdropTarget),
      leave(this.panelTarget)
    ]).then(() => {
      this.modalTarget.classList.add('hidden');
    });
  }
}
