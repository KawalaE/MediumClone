import { createActionGroup, props } from '@ngrx/store';
import { BackendErrorsInterface } from '../../auth/types/backendErrors.interface';
import { ArticleInterface } from '../../shared/types/articleInterface.interface';
import { ArticleRequestInterface } from '../../shared/types/articleRequest.interface';

export const createArticleAtions = createActionGroup({
  source: 'create article',
  events: {
    'Create article': props<{ request: ArticleRequestInterface }>(),
    'Create article success': props<{ article: ArticleInterface }>(),
    'Create article failure': props<{ errors: BackendErrorsInterface }>(),
  },
});
