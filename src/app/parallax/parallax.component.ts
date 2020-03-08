import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {
  isHover= false;

  mouseHover() {
   this.isHover= true;
  };

  mouseLeave() {
    this.isHover= false;
  }

  constructor() {
   
   }

  ngOnInit() {
  }

}

