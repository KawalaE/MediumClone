import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { EditArticleComponent } from './components/createArticle/editArticle.component';
import { EditArticleService } from './services/editArticle.service';
import * as editArticleEffects from './store/effects';
import { editArticleFeatureKey, editArticleReducer } from './store/reducers';

export const routes: Route[] = [
  {
    path: '',
    component: EditArticleComponent,
    providers: [
      EditArticleService,
      provideEffects(editArticleEffects),
      provideState(editArticleFeatureKey, editArticleReducer),
    ],
  },
];
