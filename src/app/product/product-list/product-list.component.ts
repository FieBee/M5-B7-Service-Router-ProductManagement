import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    // console.log(this.products)

    this.productService.getAll().subscribe(products => {
      this.products = products;
    });

    // this.products = [{id:1,name:"alo",price:100,description:"alo"}]
    console.log(this.products)
  }


}
