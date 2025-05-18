import { ArticleInterface } from '../../shared/types/articleInterface.interface';

export interface ArticleStateInterface {
  isLoading: boolean;
  error: string | null;
  data: ArticleInterface | null;
}
