import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { QuizSection } from '@nx/shared/types/api-quiz';

@Component({
  selector: 'nx-quiz-nav',
  templateUrl: './quiz-nav.component.html',
  styleUrls: ['./quiz-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizNavComponent implements OnInit {
  @Input() data!: QuizSection[];
  @Input() currentLevel = 0;
  @Input() progressAnimation: number | null = 0;

  constructor() {}

  ngOnInit(): void {}
}
