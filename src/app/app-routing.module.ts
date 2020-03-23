import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { RestaurantPhotosComponent } from './restaurant-photos/restaurant-photos.component';
import { PopUpComponent } from './pop-up/pop-up.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "restaurant",
    pathMatch: "full"
  },
  {
    path: "restaurant",
    component: RestaurantComponent
  },
  {
    path: "restaurant-menu",
    component: RestaurantMenuComponent
  },
  {
    path: "restaurant_photos",
    component: RestaurantPhotosComponent
  },
  {
    path: "pop-up",
    component: PopUpComponent
  },
  {
    path: "**",
    redirectTo: "restaurant",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
