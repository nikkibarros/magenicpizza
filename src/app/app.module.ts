import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemsComponent } from './menu/menu-items/menu-items.component';
import { SelectedMenuItemComponent } from './menu/selected-menu-item/selected-menu-item.component';
import { MiddlemanService } from './@shared/middleman.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemsComponent,
    SelectedMenuItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MiddlemanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
