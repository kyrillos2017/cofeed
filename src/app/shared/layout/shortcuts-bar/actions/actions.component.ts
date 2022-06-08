import { Component, OnInit } from '@angular/core';
import { faBell, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  faBell = faBell;
  faCloudArrowUp = faCloudArrowUp;

  constructor() { }

  ngOnInit(): void {
  }

}
