import { BackendErrorsInterface } from '../../auth/types/backendErrors.interface';
import { ArticleInterface } from '../../shared/types/articleInterface.interface';

export interface EditArticleStateInterface {
  article: ArticleInterface | null;
  isLoading: boolean;
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
