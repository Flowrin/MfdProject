import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss']
})
export class OpinionComponent implements OnInit {
  data = [
    { 
      img: 'assets/img/opinion/bob.jpeg',
      name: 'Bob',
      text: 'Life is one big road with lots of signs.Flee from hate, mischief and jealousy. Dont bury your thoughts, put your vision to reality. Wake Up and Live!',
      selected: false
    },
    { 
      img: 'assets/img/opinion/daenerys.jpg',
      name: 'Daenerys',
      text: '"When my dragons are grown, we will take back what was stolen from me and destroy those who wronged me! We will lay waste to armies and burn cities to the ground!"',
      selected: true
    },
    { 
      img: 'assets/img/opinion/cersey.jpg',
      name: 'Cersey',
      text: 'A good king knows when to save his strength and when to destroy his enemies.',
      selected: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  Click(event) {
    let target_array = event.target.parentElement.children;
    for (var index = 0; index < target_array.length; index++) {
      if (target_array[index] == event.target) {
        this.data[index].selected = true;
      } else {
        this.data[index].selected = false;
      }
    }
  }
}
