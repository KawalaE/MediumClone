import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BannerComponent } from '../../../shared/components/banner/banner.component';
import { FeedComponent } from '../../../shared/components/feed/feed.component';
import { FeedTogglerComponent } from '../../../shared/components/feedToggler/feedToggler.component';
import { PopularTagsComponent } from '../../../shared/components/popularTags/popularTags.component';

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tagFeed.component.html',
  standalone: true,
  imports: [
    FeedComponent,
    BannerComponent,
    PopularTagsComponent,
    FeedTogglerComponent,
  ],
})
export class TagFeedComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  apiUrl: string = '';
  tagName: string = '';

  ngOnInit(): void {
    this.route.params.subscribe((parms: Params) => {
      this.tagName = parms['slug'];
      this.apiUrl = `/articles?tag=${this.tagName}`;
    });
  }
}
