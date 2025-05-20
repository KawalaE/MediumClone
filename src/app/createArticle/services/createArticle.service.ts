import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { ArticleInterface } from '../../shared/types/articleInterface.interface';
import { ArticleRequestInterface } from '../../shared/types/articleRequest.interface';
import { ArticleResponseInterface } from '../../shared/types/articleResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class CreateArticleService {
  http = inject(HttpClient);

  createArticle(
    articleRequest: ArticleRequestInterface
  ): Observable<ArticleInterface> {
    const fullUrl = environment.apiUrl + '/articles';
    return this.http
      .post<ArticleResponseInterface>(fullUrl, articleRequest)
      .pipe(map((response) => response.article));
  }
}
