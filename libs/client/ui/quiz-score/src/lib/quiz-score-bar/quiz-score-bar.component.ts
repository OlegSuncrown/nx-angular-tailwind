import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nx-quiz-score-bar',
  templateUrl: './quiz-score-bar.component.html',
  styleUrls: ['./quiz-score-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizScoreBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
