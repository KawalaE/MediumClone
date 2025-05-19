import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BackendErrorsInterface } from '../../../../../auth/types/backendErrors.interface';
import { BackendErrorsMessages } from '../../../backendErrorMessages/backendErrorMessages.component';
import { ArticleFormValuesInterface } from '../../types/articleFormValues.interface';

@Component({
  standalone: true,
  selector: 'mc-article-form',
  templateUrl: './articleForm.component.html',
  imports: [CommonModule, BackendErrorsMessages, ReactiveFormsModule],
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValues?: ArticleFormValuesInterface;
  @Input() isSubmitting: boolean = false;
  @Input() errors: BackendErrorsInterface | null = null;

  @Output() articleSubmit = new EventEmitter<ArticleFormValuesInterface>();

  fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    title: '',
    description: '',
    body: '',
    tagList: '',
  });

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    if (!this.initialValues) {
      throw new Error('Inputs are not provided');
    }

    this.form.patchValue({
      title: this.initialValues?.title,
      description: this.initialValues?.description,
      body: this.initialValues?.body,
      tagList: this.initialValues?.tagList.join(' '),
    });
  }

  onSubmit(): void {
    const formValue = this.form.getRawValue();
    const articleFormValues: ArticleFormValuesInterface = {
      ...formValue,
      tagList: formValue.tagList.split(' '),
    };
    this.articleSubmit.emit(articleFormValues);
  }
}
