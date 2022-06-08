import { Component, OnInit } from '@angular/core';
import { ISuggestionCard } from 'src/app/global/user-data/user-data/user-data.component';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  suggestions: ISuggestionCard[] = [
    {
      name: 'Sarah Tancredi',
      bio: '@dr.sarah',
      src: 'assets/images/people/studio-portrait-orange-hair-girl.jpg',
      followed: false
    },
    {
      name: 'Aurthur Shelby',
      bio: '@art.shelby',
      src: 'assets/images/people/talent_tabs_section-9a2016252f5e887b11b53080a29d9013.jpg',
      followed: true
    },
    {
      name: 'Vin Diesel',
      bio: '@vindiesel',
      src: 'assets/images/people/360_F_417358500_mmtE6Gkk5zMYN6jGQu7g27WNkCNscW5F.jpg',
      followed: false
    },
    {
      name: 'Sarah Tancredi',
      bio: '@dr.sarah',
      src: 'assets/images/people/studio-portrait-orange-hair-girl.jpg',
      followed: false
    }
  ].map(el => {
    return {
      ...el,
      width: 45,
      borderType: 1
    }
  })

}
