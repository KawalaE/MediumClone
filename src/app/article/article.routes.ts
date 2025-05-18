import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from './services/article.service';
import * as articleEffects from './store/effects';
import { articleFeatureKey, articleReducer } from './store/reducers';

export const routes: Route[] = [
  {
    path: '',
    component: ArticleComponent,
    //this store belongs only to this feature and won't be registered
    //outside of this lazy loaded component
    providers: [
      provideEffects(articleEffects),
      provideState(articleFeatureKey, articleReducer),
      ArticleService,
    ],
  },
];
