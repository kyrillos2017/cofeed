import { Component, Input, OnInit } from '@angular/core';
import { UserDataComponent } from 'src/app/global/user-data/user-data/user-data.component';

@Component({
  selector: 'app-suggestion-card',
  templateUrl: './suggestion-card.component.html',
  styleUrls: ['./suggestion-card.component.scss']
})
export class SuggestionCardComponent extends UserDataComponent{

  @Input() followed? = true;

  constructor() {
    super()
   }



}
