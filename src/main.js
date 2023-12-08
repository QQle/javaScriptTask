import {HeaderComponent } from './components/header-component.js';
import {FormAddTaskComponent } from './components/form-add-task-component.js';
import {render, RenderPosition } from './render.js';
import { TaskBoardComponent } from './components/task-board.js';
import { TaskComponent } from './components/taskComponent.js';


const bodyContainer = document.querySelector('.header');
const formContainer = document.querySelector('.addtask-all');
const boardElement = document.querySelector('.board-app__list');



render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);


function createList() {
    for (let i = 0; i < 4; i++) {
      const listBoardComponent = new TaskBoardComponent();
      render(listBoardComponent, boardElement);
      for (let j = 0; j < 3; j++) {
        const taskElement = new TaskComponent();
        render(taskElement, listBoardComponent.getElement());
      }
    }
  }
  
  createList();

