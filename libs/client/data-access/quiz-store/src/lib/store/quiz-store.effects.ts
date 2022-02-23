import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// RxJs
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

// Actions
import { loadQuizData, loadQuizDataFailure, loadQuizDataSuccess } from './actions';

// Services
import { ApiQuizDataService } from '../services/api-quiz-data.service';

@Injectable()
export class QuizStoreEffects {
  getQuizData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadQuizData),
      switchMap(() =>
        this.apiService.getQuizData().pipe(
          map((data) => loadQuizDataSuccess({ data })),
          catchError(() => of(loadQuizDataFailure({ error: 'Failed to load quiz data' })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiQuizDataService) {}
}
