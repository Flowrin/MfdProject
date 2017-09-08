
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  getDummyData(id) {
    let data;
   
   if(id==1)
  {
     data = {id: -1,prices: 200.2,currency: '$',img: 'assets/img/products/emily.jpg',description: 'Emili Clarke'};
  }
  else if(id==2)
  {
  data = {id: -1,prices: 66.2,currency: '$',img: 'assets/img/products/aria.jpg',description: 'Aria Stark'};
  }
  else if (id==3)
  { 
  data = {id: -1,prices: 78,currency: '$',img: 'assets/img/products/sansa.jpg',description: 'Sansa Stark'};
  }
  else 
  {data = { id: -1,prices: 78,currency: '$',img: 'assets/img/products/melli.jpg',description: 'Mellisandre'};
}
    data.id = id;
    return data;
  }

  displayPreviewList() {
    return {
      new: [1, 2, 3, 4],
    
    }
  }

  displayCollection() {
    let data =[] ;
    let counter = 0;
    let total_items = 100;
    

    for (var index = 0; index < total_items; index++) {
      data.push(parseInt((counter).toString()));
      counter ++;
    }
    
    return data;
  }


}
