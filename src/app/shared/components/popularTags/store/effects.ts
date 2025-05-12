import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { PopularTagType } from '../../../types/popularTag.type';
import { PopularTagService } from '../services/popularTag.service';
import { tagsActions } from './actions';

export const getPopularTagsEffect = createEffect(
  (
    actions$ = inject(Actions),
    popularTagsService = inject(PopularTagService)
  ) => {
    return actions$.pipe(
      ofType(tagsActions.getTags),
      switchMap(() => {
        return popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return tagsActions.getTagsSuccess({ tags: popularTags });
          }),
          catchError(() => {
            return of(tagsActions.getTagsFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
