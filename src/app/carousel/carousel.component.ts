import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input('urls') data: any;
  index = -1;

  constructor() { }

  ngOnInit() {
  
      this.index = 0;
    
  }

  clickRight() {
    if (this.index >= this.data.length - 1) {
      this.index = 0;
    } else {
      this.index++;
    }
  }

  clickLeft() {
    if (this.index <= 0) {
      this.index = this.data.length - 1;
    } else {
      this.index--;
    }
  }
}
