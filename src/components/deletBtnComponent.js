import { AbstractComponent } from "../abstractComponents.js";

export class DelBtnComponent extends AbstractComponent {
  constructor(taskService, isEmpty) {
    super();
    this.taskService = taskService;
    this.isEmpty = isEmpty;
  }

  getTemplate() {
    return `<button class="box-del__item">Очистить</button>`;
  }
}