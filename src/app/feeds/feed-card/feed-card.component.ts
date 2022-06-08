import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons';
import { IFeedCard } from '../feeds-container/feeds-container.component';
import { FeedsService } from '../feeds.service';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent {
  comment = faCommentDots;
  heart = faHeart;

  @Input() feed?: IFeedCard;

  constructor(private _feedsService: FeedsService) {
  }

  like() {
    if (this.feed?.isLiked) {
      this._feedsService.disLike(this.feed?.id!!)
    }
    else {
      this._feedsService.like(this.feed?.id!!)
    }
  }

}
