import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-restaurant-header',
  templateUrl: './restaurant-header.component.html',
  styleUrls: ['./restaurant-header.component.scss']
})
export class RestaurantHeaderComponent implements OnInit {

  @ViewChild(MatMenuTrigger, { static: true }) trigger: MatMenuTrigger;

  restaurant_menuUrl = "/restaurant-menu";
  isTransparent: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.url.subscribe(
      (data) => {
        const url = data[0];
        const path = url.path;

        this.isTransparent = path === 'restaurant' ? true : false;
      }
    )
  }

  scrollToTop(){
    window.scrollTo(0,0);
  }
}