import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ParallaxModule } from 'ngx-parallax';
import { ScrollToModule } from 'ng2-scroll-to';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParallaxComponent } from './parallax/parallax.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantHeaderComponent } from './restaurant-header/restaurant-header.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { RestaurantPhotosComponent } from './restaurant-photos/restaurant-photos.component';
import { RestaurantFooterComponent } from './restaurant-footer/restaurant-footer.component';
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ParallaxComponent,
    HeaderComponent,
    RestaurantComponent,
    RestaurantHeaderComponent,
    RestaurantMenuComponent,
    RestaurantPhotosComponent,
    RestaurantFooterComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ParallaxModule,
    ScrollToModule.forRoot(),
    MatIconModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
