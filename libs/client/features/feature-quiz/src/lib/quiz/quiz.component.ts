import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlayerStoreStore } from '@nx/client/data-access/player-store/player-store';
import * as quizStore from '@nx/client/data-access/quiz-store';

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

  constructor(private store: Store, private playerStore: PlayerStoreStore) {}
  ngOnInit(): void {
    this.store.dispatch(quizStore.loadQuizData());
    this.playerStore.currentTime$.subscribe((val: any) => {
      console.log('TICK', this.playerStore.audioObj.currentTime);
    });
  }

  onStartNewLevel() {
    this.playerStore.play();
    this.store.dispatch(quizStore.nextLevel());
  }
}
