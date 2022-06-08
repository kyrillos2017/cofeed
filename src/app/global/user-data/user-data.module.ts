import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataComponent } from './user-data/user-data.component';
import { UserImageModule } from '../user-image/user-image.module';



@NgModule({
  declarations: [
    UserDataComponent
  ],
  imports: [
    CommonModule,
    UserImageModule
  ],
  exports: [
    UserDataComponent
  ]
})
export class UserDataModule { }
