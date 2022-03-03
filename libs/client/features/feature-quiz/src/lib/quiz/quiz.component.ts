import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadQuizData, nextLevel, selectCurrentQuestion, selectGameQuizState } from '@nx/client/data-access/quiz-store';

@Component({
  selector: 'nx-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent implements OnInit {
  game$ = this.store.select(selectGameQuizState);
  currentQuestion$ = this.store.select(selectCurrentQuestion)
  
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(loadQuizData())
  }
  onStartNewLevel() {
    this.store.dispatch(nextLevel())
  }
}
