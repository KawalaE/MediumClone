import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { ArticleFormComponent } from '../../../shared/components/articleForm/components/articleForm/articleForm.component';
import { ArticleFormValuesInterface } from '../../../shared/components/articleForm/types/articleFormValues.interface';
import { ArticleRequestInterface } from '../../../shared/types/articleRequest.interface';
import { createArticleAtions } from '../../store/actions';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers';

@Component({
  standalone: true,
  selector: 'mc-create-article',
  templateUrl: './createArticle.component.html',
  imports: [CommonModule, ArticleFormComponent],
})
export class CreateArticleComponent {
  store = inject(Store);

  initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backnedErrors: this.store.select(selectValidationErrors),
  });

  onSubmit(articleFormValues: ArticleFormValuesInterface): void {
    const request: ArticleRequestInterface = {
      article: articleFormValues,
    };
    this.store.dispatch(createArticleAtions.createArticle({ request }));
  }
}
