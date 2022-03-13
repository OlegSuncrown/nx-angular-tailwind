import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { QuizItem } from '@nx/shared/types/api-quiz';

@Component({
  selector: 'nx-quiz-option-item',
  templateUrl: './quiz-option-item.component.html',
  styleUrls: ['./quiz-option-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizOptionItemComponent {
  @Input() option!: QuizItem;
  @Input() index!: number;

  constructor() {}
}
