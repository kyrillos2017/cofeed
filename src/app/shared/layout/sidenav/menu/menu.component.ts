import { Component, OnInit } from '@angular/core';
import { IconDefinition, faHouseChimney, faCommentDots, faUser, faBookmark, faGear } from '@fortawesome/free-solid-svg-icons';

export interface IMenuItem {
  name: string;
  icon: IconDefinition
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  icons = {
    faHouseChimney,
    faCommentDots,
    faBookmark,
    faUser,
    faGear
  }

  ngOnInit(): void {
  }

  menu: IMenuItem[] = [
    {
      name: 'Home',
      icon: this.icons.faHouseChimney
    },
    {
      name: 'Messages',
      icon: this.icons.faCommentDots
    },
    {
      name: 'Profile',
      icon: this.icons.faUser
    },
    {
      name: 'Saved Post',
      icon: this.icons.faBookmark
    },
    {
      name: 'Settings',
      icon: this.icons.faGear
    },
  ]

}
