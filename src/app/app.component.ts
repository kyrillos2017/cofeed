import { Component, OnInit } from '@angular/core';
import { FeedsService } from './feeds/feeds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'cofeed';

  constructor(private _feedsService: FeedsService){}

  ngOnInit(): void {
    this._feedsService.loadLikedFeeds()
  }
}
