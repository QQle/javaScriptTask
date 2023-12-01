import {createElement, render} from '../render.js';
var name=["backlog", "in procces","trash"]
let parent = document.querySelector('.list')
let element= document.querySelector('.box')


function createBackLogComponentTemplate() { 
   
    let clone= element.cloneNode(true);
    let clone1= element.cloneNode(true)
    let clone2= element.cloneNode(true)
  return(
    
    clone.children[0].textContent = 'В процессе',
    parent.append(clone),
    clone1.children[0].textContent = 'Готово',
    parent.append(clone1),
    clone2.children[0].textContent = 'Корзина',
    parent.append(clone2)
    

 
  );
       
     
      
}


export class BackLogComponent {
  getTemplate() {
    return createBackLogComponentTemplate();
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
