import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
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
