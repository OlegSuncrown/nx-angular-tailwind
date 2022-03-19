import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as quizStore from '@nx/client/data-access/quiz-store';
import { navigateTo } from '@nx/shared/data-access/ngrx-root-store';

import { tap } from 'rxjs';
@Component({
  selector: 'nx-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent {
  game$ = this.store.select(quizStore.selectGameQuizState)
  // game$ = this.store.select(quizStore.selectGameQuizState).pipe(
  //   tap((state) => {
  //     if (!state.playerName) {
  //       this.store.dispatch(navigateTo({ url: 'start' }));
  //     }
  //   })
  // );

  constructor(private store: Store) {}

  onStartNewGame() {
    this.store.dispatch(navigateTo({ url: 'quiz' }));
  }
}
