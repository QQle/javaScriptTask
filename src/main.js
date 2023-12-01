import {HeaderComponent} from './components/header-component.js';
import {FormAddTaskComponent} from './components/form-add-task-component.js';
import {render, RenderPosition} from './render.js';
import { BackLogComponent } from './components/back-log-task.js';


const bodyContainer = document.querySelector('.header');
const formContainer = document.querySelector('.addtask-all');
const listContainer =document.querySelector('.list');

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer, RenderPosition.BEFOREBEGIN);
render(new BackLogComponent(), listContainer, RenderPosition.AFTERBEGIN);