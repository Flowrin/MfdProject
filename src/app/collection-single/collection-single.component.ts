import { Component, OnInit } from '@angular/core';


import { ProductService } from '../product.service';

const itemsNr: number = 12;
@Component({
  selector: 'app-collection-single',
  templateUrl: './collection-single.component.html',
  styleUrls: ['./collection-single.component.scss']
})
export class CollectionSingleComponent implements OnInit {
  update = true;
  
   
  
    collection = {
      data: [],
      counter: [],
      current_page: 0,
      from_page: 0,
      to_page: 0,
      item_count: 0,
      page_count: []
    };
  
    constructor(private service_product: ProductService) {
      this.displayContent();
    }
  
    ngOnInit() {
    }
  
    displayContent() {
      if (this.update) {
        this.collectionList();
        this.update = false;
        let page = parseInt((this.collection.data.length / itemsNr).toString())
        if (this.collection.data.length % itemsNr > 0) {
          page++;
        }
        for (var index = 1; index <= page; index++) {
          this.collection.page_count.push(index);
        }
      }
      this.collection.counter = [];
      let offset = this.collection.current_page * itemsNr;
      for (var i = 0; i < itemsNr; i++) {
        let item_offset = i + offset;
        this.collection.counter[i] = this.collection.data[item_offset];
      }
  
      this.collection.item_count = this.collection.data.length;
      this.collection.from_page = offset + 1;
      if (this.collection.counter.length != itemsNr) {
        this.collection.to_page = this.collection.data.length
  
        for (var i = this.collection.counter.length; i < itemsNr; i++) {
          this.collection.counter[i] = null;
        }
      } else {
        this.collection.to_page = offset + this.collection.counter.length;
      }
    }
    collectionList() {
      this.collection = {
        data: this.service_product.displayCollection(),
        counter: [],
        current_page: 0,
        from_page: 0,
        to_page: 0,
        item_count: 0,
        page_count: []
      }
    }
  
    buildPages(event) {
      let page = parseInt(event.target.id.split('_')[1]) - 1;
      if (page == this.collection.current_page) return;
      this.collection.current_page = page;
      this.displayContent();
  
      
    }
  }
  