import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemsComponent } from './menu/menu-items/menu-items.component';
import { SelectedMenuItemComponent } from './menu/selected-menu-item/selected-menu-item.component';
import { MiddlemanService } from './@shared/middleman.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartItemComponent } from './shopping-cart/cart-item/cart-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderedItemComponent } from './order-summary/ordered-item/ordered-item.component';
import { ShoppingCartDeliveryComponent } from './shopping-cart/shopping-cart-delivery/shopping-cart-delivery.component';
import { OrderSummaryDeliveryComponent } from './order-summary/order-summary-delivery/order-summary-delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemsComponent,
    SelectedMenuItemComponent,
    ShoppingCartComponent,
    CartItemComponent,
    OrderSummaryComponent,
    OrderedItemComponent,
    ShoppingCartDeliveryComponent,
    OrderSummaryDeliveryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MiddlemanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
