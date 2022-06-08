import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-cover-image',
  templateUrl: './card-cover-image.component.html',
  styleUrls: ['./card-cover-image.component.scss']
})
export class CardCoverImageComponent implements OnInit {

  @Input() src? : string;
  @Input() imgTag : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
