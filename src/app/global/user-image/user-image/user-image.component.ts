import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export type BorderType = 0 | 1 | 2;

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.scss']
})
export class UserImageComponent implements OnInit {

  @Input() src?: string;
  @Input() width?: number = 50;
  @Input() borderType?: BorderType = 0;
  @Input() me?: boolean = false;

  faPlus = faPlus

  constructor() { }

  ngOnInit(): void {
  }

}
