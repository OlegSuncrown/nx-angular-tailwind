import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadQuizData, loadQuizDataFailure, loadQuizDataSuccess } from './actions';
import { ApiQuizDataService } from '../services/api-quiz-data.service';

@Injectable()
export class QuizStoreEffects {
  getQuizData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadQuizData),
      switchMap(() =>
        this.apiService.getQuizData().pipe(
          map((data) => loadQuizDataSuccess({ data })),
          catchError((error) => of(loadQuizDataFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiQuizDataService) {}
}