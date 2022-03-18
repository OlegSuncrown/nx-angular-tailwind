import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// @ngrx
import { Actions, createEffect, ofType } from '@ngrx/effects';

// RxJs
import { tap } from 'rxjs/operators';
import { navigateTo } from './router.actions';

@Injectable()
export class RouterEffects {
  constructor(private actions$: Actions, private router: Router) {}

  navigateTo$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(navigateTo),
        tap(({ url }) => {
          this.router.navigate([url]);
        })
      );
    },
    { dispatch: false }
  );
}
