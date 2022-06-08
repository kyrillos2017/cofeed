import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedsRoutingModule } from './feeds-routing.module';
import { FeedsContainerComponent } from './feeds-container/feeds-container.component';
import { SharedModule } from '../shared/shared.module';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { CardCoverImageModule } from '../global/card-cover-image/card-cover-image.module';
import { UserDataModule } from '../global/user-data/user-data.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    FeedsContainerComponent,
    FeedCardComponent
  ],
  imports: [
    CommonModule,
    FeedsRoutingModule,
    SharedModule,
    CardCoverImageModule,
    UserDataModule,
    FontAwesomeModule
  ]
})
export class FeedsModule { }
