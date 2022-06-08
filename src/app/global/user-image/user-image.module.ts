import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserImageComponent } from './user-image/user-image.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    UserImageComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    UserImageComponent,
  ]
})
export class UserImageModule { }
