import {createElement} from '../render';


function createContentComponentTemplate() {
    return (
        `<div class="tab-content" data-tab="1">
        <p>Один дома</p>
        <p>Рождество</p>
        <p>Санта Клаус</p>
      </div>
      <div class="tab-content" data-tab="2">
        <p>Музыка из балета Щелкунчик</p>
        <p>Музыка из балета Лебединое озеро</p>
      </div>
      <div class="tab-content" data-tab="3">
          <p>Война и мир</p>
          <p>Парфюмер</p>
          <p>Волхв</p>
        </div>
        <div class="tab-content" data-tab="4">
          <p>Burda Style</p>
        </div>`
      );
}


export class ContentComponent {
  getTemplate() {
    return createContentComponentTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}