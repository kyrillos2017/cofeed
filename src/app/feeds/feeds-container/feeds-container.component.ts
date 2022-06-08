import { Component, OnInit } from '@angular/core';
import { ISuggestionCard } from 'src/app/global/user-data/user-data/user-data.component';
import { FeedsService } from '../feeds.service';

export interface IFeedCard {
  id?: string;
  src?: string;
  likes?: number;
  comments?: number;
  user?: ISuggestionCard;
  isLiked?: boolean
}

@Component({
  selector: 'app-feeds-container',
  templateUrl: './feeds-container.component.html',
  styleUrls: ['./feeds-container.component.scss']
})
export class FeedsContainerComponent implements OnInit {

  likedFeeds: string[] = []
  feeds: IFeedCard[] = [
    {
      id: 'A1',
      src: 'assets/images/white-headphones-blue-pink-pastel-background-214561131.jpg',
      likes: 268,
      comments: 120,
      user: {
        name: 'Sarah Tancredi',
        bio: '@dr.sarah',
        src: 'assets/images/people/studio-portrait-orange-hair-girl.jpg',
      }
    },
    {
      id: 'A2',
      src: 'assets/images/geometric-abstract-with-memphis-style-background-free-vector.jpg',
      likes: 690,
      comments: 30,
      user: {
        name: 'Aurthur Shelby',
      bio: '@art.shelby',
      src: 'assets/images/people/talent_tabs_section-9a2016252f5e887b11b53080a29d9013.jpg',
      }
    },
    {
      id: 'A3',
      src: 'assets/images/colorful-geometric-wave-abstract-background-free-vector.jpg',
      likes: 548,
      comments: 253,
      user: {
        name: 'Vin Diesel',
      bio: '@vindiesel',
      src: 'assets/images/people/360_F_417358500_mmtE6Gkk5zMYN6jGQu7g27WNkCNscW5F.jpg',
      }
    },
    {
      id: 'A4',
      src: 'assets/images/abstract-background-3d-purple-yellow-white-geometric-squares-shape-design-paper-cut-style-vector.jpg',
      likes: 698,
      comments: 123,
      user: {
        name: 'Aurthur Shelby',
        bio: '@art.shelby',
        src: 'assets/images/people/talent_tabs_section-9a2016252f5e887b11b53080a29d9013.jpg',
      }
    },
    {
      id: 'A5',
      src: 'assets/images/pngtree-3d-color-triangle-abstract-background-picture-image_1431608.jpg',
      likes: 54,
      comments: 235,
      user: {
        name: 'Sarah Tancredi',
        bio: '@dr.sarah',
        src: 'assets/images/people/studio-portrait-orange-hair-girl.jpg',
      }
    }
  ]
  constructor(private _feedsService: FeedsService) { }

  ngOnInit(): void {
    this._feedsService.currentLikedFeeds.subscribe(res => {
      this.likedFeeds = res;

      this.feeds = this.feeds.map(el => {
        return {
          ...el,
          isLiked: this.likedFeeds.includes(el.id!!),
        }
      })
    }
    )
  }



}
