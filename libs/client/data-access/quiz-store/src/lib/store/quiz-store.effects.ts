import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';

// RxJs
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

// Actions
import * as apiActions from './actions/api-quiz.actions';
import * as quizActions from './actions/quiz.actions';

// NGRX
import { selectGameQuizState } from './quiz-store.selectors';
import { Store } from '@ngrx/store';

// Services
import { ApiQuizDataService } from '../services/api-quiz-data.service';

@Injectable()
export class QuizStoreEffects {
  getQuizData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(apiActions.loadQuizData),
      switchMap(() =>
        this.apiService.getQuizData().pipe(
          map((data) => apiActions.loadQuizDataSuccess({ data })),
          catchError(() =>
            of(apiActions.loadQuizDataFailure({ error: 'Failed to load quiz data' }))
          )
        )
      )
    )
  );

  setNewLevelQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(quizActions.nextLevel, apiActions.loadQuizDataSuccess),
      concatLatestFrom(() => this.store.select(selectGameQuizState)),
      map(([, state]) => {
        if (state.currentLevel > state.data.length - 1) {
          return quizActions.gameOver();
        }
        return quizActions.nextLevelSuccess();
      })
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiQuizDataService,
    private store: Store
  ) {}
}
