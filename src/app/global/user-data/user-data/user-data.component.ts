import { Component, Input, OnInit } from '@angular/core';
import { BorderType } from '../../user-image/user-image/user-image.component';

export interface ISuggestionCard {
  name?: string;
  bio?: string;
  src?: string;
  width?: number;
  borderType?: BorderType;
  followed? :boolean
}

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  @Input() src?: string;
  @Input() width?: number;
  @Input() name?: string;
  @Input() bio?: string;
  @Input() borderType?: BorderType = 0
  @Input() me?: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
