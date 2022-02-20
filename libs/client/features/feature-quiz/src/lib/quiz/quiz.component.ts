import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadQuizData, selectGameQuizState } from '@nx/client/data-access/quiz-store';

@Component({
  selector: 'nx-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent implements OnInit {
  game$ = this.store.select(selectGameQuizState);

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(loadQuizData())
  }
}
