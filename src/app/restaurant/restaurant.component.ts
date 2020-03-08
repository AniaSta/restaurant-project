import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  isHover= false;

  mouseHover() {
   this.isHover= true;
  };

  mouseLeave() {
    this.isHover= false;
  }

  constructor() { }

  ngOnInit() {
  }

}
