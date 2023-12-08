import { createElement } from "../render.js";
function createTaskComponentTemplate() {
  return (
  `<div class="box-backlog__item">
  <ul class="box__task ">
     <li>Task</li>
      </ul>
      </div>`
)}

export class TaskComponent {
  getTemplate() {
    return createTaskComponentTemplate();
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