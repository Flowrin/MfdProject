import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {
 
    show = {
      new: true,
      //TODO add rest of tabs and do the same
    }
    products;
  
    constructor(private service_product: ProductService) { 
      this.products = this.service_product.displayPreviewList();
    }
  
    ngOnInit() {
    }
  
    clickDisplay() {
      this.show.new = true;
  
    }
  
  
  

  }
  