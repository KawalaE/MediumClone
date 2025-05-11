import { ArticleInterface } from '../../../types/articleInterface.interface';

export interface GetFeedResponseInterface {
  articles: ArticleInterface[];
  articlesCount: number;
}
