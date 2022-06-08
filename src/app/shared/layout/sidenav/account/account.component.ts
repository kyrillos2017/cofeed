import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  isCollapsed = false;

  faAngleDown = faAngleDown;

  currentUser = {
    name: 'Kyrillos',
    bio: '@kyrillos_mamdoh',
    src: 'assets/images/people/kyrillos_mamdoh.jpg',
    width: 40
  }

  constructor() { }

  ngOnInit(): void {
  }

}
