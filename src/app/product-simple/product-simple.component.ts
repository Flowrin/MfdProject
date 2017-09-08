import { Component, OnInit ,Input} from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-simple',
  templateUrl: './product-simple.component.html',
  styleUrls: ['./product-simple.component.scss']
})
export class ProductSimpleComponent implements OnInit {
  @Input('product_id') product_id: string;
  info;

  constructor(private service_product: ProductService) {
  }

  ngOnInit() {
    this.info = this.service_product.getDummyData(this.product_id);
  }

  OnMouseEnter(event) {
    event.target.getElementsByClassName("product__img-menu")[0].style.display = "block";
  }

  OnMouseLeave(event) {
    event.target.getElementsByClassName("product__img-menu")[0].style.display = "none";
  }
}