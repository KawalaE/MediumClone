import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ArticleFormComponent } from '../../../shared/components/articleForm/components/articleForm/articleForm.component';
import { ArticleFormValuesInterface } from '../../../shared/components/articleForm/types/articleFormValues.interface';

@Component({
  standalone: true,
  selector: 'mc-create-article',
  templateUrl: './createArticle.component.html',
  imports: [CommonModule, ArticleFormComponent],
})
export class CreateArticleComponent {
  initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };
  onSubmit(articleFormValues: ArticleFormValuesInterface): void {
    console.log('onSubmit in create article', articleFormValues);
  }
}
