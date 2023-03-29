import { Page404Component } from './page404/page404.component';
import { PageCartComponent } from './page-cart/page-cart.component';
import { PageProfilComponent } from './page-profil/page-profil.component';
import { PageFavoriteComponent } from './page-favorite/page-favorite.component';
import { PageOrdersComponent } from './page-orders/page-orders.component';
import { PageCatalogComponent } from './page-catalog/page-catalog.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageConnectionComponent } from './page-connection/page-connection.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSignUpComponent } from './sign-up/page-sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: PageConnectionComponent,
  },
  {
    path: 'accueil',
    component: PageHomeComponent,
  },
  {
    path: 'catalogue',
    component: PageCatalogComponent,
  },
  {
    path: 'commandes',
    component: PageOrdersComponent,
  },
  {
    path: 'favoris',
    component: PageFavoriteComponent,
  },
  {
    path: 'profil',
    component: PageProfilComponent,
  },
  {
    path: 'panier',
    component: PageCartComponent,
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
