import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[quiz]'
})
export class QuizButtonDirective {

  @HostBinding('class') get hostClass() {
    const classString = 'bg-red-500'
    return classString
  }
  @HostListener('click', ['$event'])
  confirmFirst() {
    return window.confirm('Are you sure you want to do this?');
  }
  constructor() { 
    
    console.log('Hello !!!!!!!!')
  }

}
