import { Component } from '@angular/core';
import { BannerComponent } from '../../../shared/components/banner/banner.component';
import { FeedComponent } from '../../../shared/components/feed/feed.component';
import { FeedTogglerComponent } from '../../../shared/components/feedToggler/feedToggler.component';
import { PopularTagsComponent } from '../../../shared/components/popularTags/popularTags.component';

@Component({
  selector: 'mc-global-feed',
  templateUrl: './globalFeed.component.html',
  standalone: true,
  imports: [
    FeedComponent,
    BannerComponent,
    PopularTagsComponent,
    FeedTogglerComponent,
  ],
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}
