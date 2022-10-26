import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {


  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });
  categories: any[];

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
    this.getAllCategories();
  }

  ngOnInit() {
  }

  submit() {
    const product = this.productForm.value;

    this.productService.saveProduct(product).subscribe(() => {
      this.productForm.reset();
      alert('Tạo thành công');
    }, e => {
      console.log(e);
    });
  }

  getAllCategories(){
    console.log(this.categoryService.getAll())
    this.categoryService.getAll().subscribe(categories=>{
      this.categories = categories;

    })
    console.log(this.categories)
  }

}
