import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nx-quiz-nav',
  templateUrl: './quiz-nav.component.html',
  styleUrls: ['./quiz-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
