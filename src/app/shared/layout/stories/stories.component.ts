import { Component, OnInit } from '@angular/core';
import { BorderType } from 'src/app/global/user-image/user-image/user-image.component';

export interface IStory {
  name?: string;
  src?: string;
  width?: number;
  borderType?: BorderType,
  me?: boolean;
}

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  stories: IStory[] = [
    {
      name: 'You',
      src: 'assets/images/people/kyrillos_mamdoh.jpg',
      me: true
    }
  ]
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 6; i++) {
      this.stories.push(
        {
          name: 'Sarah',
          src: 'assets/images/people/studio-portrait-orange-hair-girl.jpg',
        },
        {
          name: 'Aurthur',
          src: 'assets/images/people/talent_tabs_section-9a2016252f5e887b11b53080a29d9013.jpg',
        },
        {
          name: 'Vin',
          src: 'assets/images/people/360_F_417358500_mmtE6Gkk5zMYN6jGQu7g27WNkCNscW5F.jpg',
        },
      )

    }

    this.stories = this.stories.map(el => {
      return {
        ...el,
        me: el.me? el.me : false,
        width: 60,
        borderType: 2
      }
    })
  }

}
