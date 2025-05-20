import { Route } from '@angular/router';
import { CreateArticleComponent } from './components/createArticle/createArticle.component';
import { CreateArticleService } from './services/createArticle.service';

export const routes: Route[] = [
  {
    path: '',
    component: CreateArticleComponent,
    providers: [CreateArticleService],
  },
];
