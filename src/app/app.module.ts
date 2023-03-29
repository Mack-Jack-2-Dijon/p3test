import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageConnectionComponent } from './page-connection/page-connection.component';
import { Page404Component } from './page404/page404.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageFavoriteComponent } from './page-favorite/page-favorite.component';
import { PageOrdersComponent } from './page-orders/page-orders.component';
import { PageCatalogComponent } from './page-catalog/page-catalog.component';
import { PageProfilComponent } from './page-profil/page-profil.component';
import { PageCartComponent } from './page-cart/page-cart.component';

import { PageSignUpComponent } from './sign-up/page-sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ItemProductListComponent } from './item-product-list/item-product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageConnectionComponent,
    Page404Component,
    PageHomeComponent,
    PageFavoriteComponent,
    PageOrdersComponent,
    PageCatalogComponent,
    PageProfilComponent,
    PageCartComponent,
    PageSignUpComponent,
    ItemProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
