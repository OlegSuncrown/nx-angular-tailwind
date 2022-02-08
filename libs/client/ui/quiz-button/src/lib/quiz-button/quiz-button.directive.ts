import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[quizButton]',
})
export class QuizButtonDirective {
  @HostBinding('class') get hostClass() {
    const hoverClasses = ['hover:from-quiz-600', 'hover:to-quiz-500']
    const disabledClasses = ['disabled:from-gray-400', 'disabled:to-gray-500', 'disabled:cursor-not-allowed']
    const textClasses = ['uppercase', 'font-normal', 'text-sm', 'text-center', 'text-white']
    const skinClasses = ['bg-gradient-to-r', 'from-quiz-400', 'to-quiz-300', 'rounded',  'px-4',  'py-3',  'inline-flex', 'items-center']
    return [...hoverClasses, ...disabledClasses, ...textClasses, ...skinClasses];
    
  }
}
