import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { ShortcutsBarComponent } from './layout/shortcuts-bar/shortcuts-bar.component';
import { MenuComponent } from './layout/sidenav/menu/menu.component';
import { AccountComponent } from './layout/sidenav/account/account.component';
import { SuggestionsComponent } from './layout/shortcuts-bar/suggestions/suggestions.component';
import { LatestActivityComponent } from './layout/shortcuts-bar/latest-activity/latest-activity.component';
import { StoriesComponent } from './layout/stories/stories.component';
import { ActionsComponent } from './layout/shortcuts-bar/actions/actions.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './layout/sidenav/logo/logo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { UserDataModule } from '../global/user-data/user-data.module';
import { SuggestionCardComponent } from './layout/shortcuts-bar/suggestions/suggestion-card/suggestion-card.component';
import { CardCoverImageModule } from '../global/card-cover-image/card-cover-image.module';



@NgModule({
  declarations: [
    SidenavComponent,
    ShortcutsBarComponent,
    MenuComponent,
    AccountComponent,
    SuggestionsComponent,
    LatestActivityComponent,
    StoriesComponent,
    ActionsComponent,
    LayoutComponent,
    LogoComponent,
    SuggestionCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    CollapseModule.forRoot(),
    UserDataModule,
    CardCoverImageModule
  ]
})
export class SharedModule { }
