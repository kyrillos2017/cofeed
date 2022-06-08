import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {

  private likedFeedsSource = new BehaviorSubject<string[]>([]);
  currentLikedFeeds = this.likedFeedsSource.asObservable();

  protected feeds = 'feeds'

  constructor() { }

  private shareLikedFeeds(feeds: string[]){
    this.likedFeedsSource.next(feeds)
  }

  loadLikedFeeds(){
    const storedData = localStorage.getItem(this.feeds);
    this.shareLikedFeeds(storedData? JSON.parse(storedData) : [])
  }

  like(id: string) {
    const storedData = localStorage.getItem(this.feeds);
    let newData = []

    if (storedData) {
      newData = [...JSON.parse(storedData), id]
    } else {
      newData = [id]
    }

    localStorage.setItem(this.feeds, JSON.stringify(newData))
    this.shareLikedFeeds(newData);
  }

  disLike(id: string) {
    const storedData = localStorage.getItem(this.feeds);
    let newData = [...JSON.parse(storedData!!)].splice(storedData!!.indexOf(id), 1)
    localStorage.setItem(this.feeds, JSON.stringify(newData))
    this.shareLikedFeeds(newData)
  }

}
