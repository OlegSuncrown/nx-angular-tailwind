import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as quizStore from '@nx/client/data-access/quiz-store';
import { setOption } from '@nx/client/data-access/quiz-store';
import { QuizItem } from '@nx/shared/types/api-quiz';

@Component({
  selector: 'nx-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent implements OnInit {
  game$ = this.store.select(quizStore.selectGameQuizState);
  currentQuestion$ = this.store.select(quizStore.selectCurrentQuestion);
  currentGenre$ = this.store.select(quizStore.selectCurrentGenre);
  progressAnimation$ = this.store.select(quizStore.selectProgressAnimation);
  optionSection$ = this.store.select(quizStore.selectOptionSection);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(quizStore.loadQuizData());
  }

  onStartNewLevel() {
    this.store.dispatch(quizStore.nextLevel());
  }

  onSelectSong(option: QuizItem) {
    this.store.dispatch(setOption({ selectedOption: option?.id }));
  }
}
