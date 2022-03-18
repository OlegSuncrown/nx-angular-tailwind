import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as quizStore from '@nx/client/data-access/quiz-store';

// Actions
import { setOption } from '@nx/client/data-access/quiz-store';

// Interfaces
import { QuizItem } from '@nx/shared/types/api-quiz';

@Component({
  selector: 'nx-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent implements OnInit {
  api$ = this.store.select(quizStore.selectApiQuizState);

  game$ = this.store.select(quizStore.selectGameQuizState);
  currentQuestion$ = this.store.select(quizStore.selectCurrentQuestion);
  currentGenre$ = this.store.select(quizStore.selectCurrentGenre);
  progressAnimation$ = this.store.select(quizStore.selectProgressAnimation);
  optionSection$ = this.store.select(quizStore.selectOptionSection);

  isOptionCardPlaying = false;
  isQuestionCardPlaying = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(quizStore.loadQuizData());
  }

  onStartNewLevel() {
    this.store.dispatch(quizStore.nextLevel());
  }

  onSelectOption(selectedOption: QuizItem) {
    this.store.dispatch(setOption({ selectedOption }));
  }

  optionCardPlaying(isPlaying: boolean) {
    this.isOptionCardPlaying = isPlaying;
  }

  questionCardPlaying(isPlaying: boolean) {
    this.isQuestionCardPlaying = isPlaying;
  }
}
