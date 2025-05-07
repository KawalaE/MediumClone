import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { PersistanceService } from '../../shared/services/persistance.service';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { AuthService } from '../services/auth.service';
import { authActions } from './actions';

export const registerEffect = createEffect(
  //provide stream of all actions in our app
  //inject a service (to call register function with effect)
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistanceService = inject(PersistanceService)
  ) => {
    return actions$.pipe(
      //ofType - limits the actions type to what we need
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            //effect dispatches the action for us
            persistanceService.set('accessToken', currentUser.token);
            return authActions.registerSuccess({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.registerFailure({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterRegisterEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.registerSuccess),
      //side effect inside of a stream
      tap(() => {
        router.navigateByUrl('/');
      })
    );
  },

  //dispatch : false - we don't want to dispatch anything
  { functional: true, dispatch: false }
);

export const loginEffect = createEffect(
  //provide stream of all actions in our app
  //inject a service (to call register function with effect)
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistanceService = inject(PersistanceService)
  ) => {
    return actions$.pipe(
      //ofType - limits the actions type to what we need
      ofType(authActions.login),
      switchMap(({ request }) => {
        return authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            //effect dispatches the action for us
            persistanceService.set('accessToken', currentUser.token);
            return authActions.loginSuccess({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.loginFailure({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterLoginEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.loginSuccess),
      //side effect inside of a stream
      tap(() => {
        router.navigateByUrl('/');
      })
    );
  },

  //dispatch : false - we don't want to dispatch anything
  { functional: true, dispatch: false }
);
