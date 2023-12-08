import {createElement, render} from '../render.js';


function createTaskBoardComponentTemplate() { 
   

  return(
    
        `<div class="box">
             <h2 class="box__title box-backlog">Бэклог</h2>
           </div>  `   

 
  )
       
     
      
}


export class TaskBoardComponent {
  getTemplate() {
    return createTaskBoardComponentTemplate();
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
