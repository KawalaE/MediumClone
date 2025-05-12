import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { PopularTagType } from '../../../types/popularTag.type';

export const tagsActions = createActionGroup({
  source: 'tags',
  events: {
    'Get tags': props<{ url: string }>(),
    'Get tags success': props<{ tags: PopularTagType[] }>(),
    'Get tags failure': emptyProps(),
  },
});
