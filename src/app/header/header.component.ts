import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  refs = {
    func: null,
    target: null
  };

  opt_template: string = '';
  block = {
    homepage: '/homepage',
    collection: '/collection'
  }

  resources = {
    homepage: {
      index: 0,
      cunter: 0,
      dummy: false,
      urls: [
        ['https://dummyimage.com/1350x560/1826de/262b6e&text=Header', true ],
        ['https://dummyimage.com/1350x560/0b0b0d/131fab&text=Header', false],
        ['https://dummyimage.com/1350x560/c90e0e/070708&text=Header', false],
        ['https://dummyimage.com/1350x560/a50ec7/1f1fd9&text=Header', false],
      ]
    }
  }

  constructor(private route:Router) {
    route.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.opt_template = route.url.split('?')[0];
        switch (this.opt_template) {
          case this.block.homepage:
        
          case this.block.collection:
            this.SetBackgroundImage('https://dummyimage.com/1350x560/bad9d7/fff&text=+++');
            break;
          default:
            document.getElementById('main-header').style.backgroundImage = '';
            break;
        }
      }
    });
  }

  SetBackgroundImage(url) {
    document.getElementById('main-header').style.backgroundImage = 'url(' + url + ')';
  }

  ngOnInit() {
  }





  HomePageSetUrlsStats(index: number) {
    if (index == 0) {
      this.resources.homepage.urls[this.resources.homepage.urls.length - 1][1] = false;
    } else {
      this.resources.homepage.urls[index - 1][1] = false;
    }

    if (index >= this.resources.homepage.urls.length - 1) {
      this.resources.homepage.urls[0][1] = false;
    } else {
      this.resources.homepage.urls[index + 1][1] = false;
    }
  }

  clickLeft() {
    this.resources.homepage.index++;
    if (this.resources.homepage.index >= this.resources.homepage.urls.length) {
      this.resources.homepage.index = 0;
    }

    this.reset();
  }

  clickRight() {
    this.resources.homepage.index--;
    if (this.resources.homepage.index < 0) {
      this.resources.homepage.index = this.resources.homepage.urls.length - 1;
    }

    this.reset();
  }

  reset() {
    this.resources.homepage.cunter = 0;
    this.resources.homepage.dummy = false;

    this.resources.homepage.urls[this.resources.homepage.index][1] = true;
    this.SetBackgroundImage(this.resources.homepage.urls[this.resources.homepage.index][0]);
    this.HomePageSetUrlsStats(this.resources.homepage.index);
  }
}
