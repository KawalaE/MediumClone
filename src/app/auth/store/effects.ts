import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { AuthService } from '../services/auth.service';
import { authActions } from './actions';

export const registerEffect = createEffect(
  //provide stream of all actions in our app
  //inject a service (to call register function with effect)
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      //ofType - limits the actions type to what we need
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            //effect dispatches the action for us
            return authActions.registerSuccess({ currentUser });
          }),
          catchError(() => {
            return of(authActions.registerFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
