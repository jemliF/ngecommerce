import {Component, OnInit, Inject} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/Product";
import {Category} from "../../models/Category";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.component.html'
})
export class HomeComponent implements OnInit {
  private loading = true;
  private products:Product[];
  private categories:Category[];
  private addingToCartMode;
  private selectedCategories:Category[];

  constructor(private productService:ProductService, private categoryService:CategoryService) {

  }

  ngOnInit():void {
    this.categoryService.getAll()
      .subscribe((res) => {
        console.log(res);
        this.categories = res;
      }, (err) => {
        console.error(err);
      });
    this.productService.getAll()
      .subscribe((res) => {
        console.log(res);
        this.loading = false;
        this.products = res;
      }, (err) => {
        console.error(err);
      });
  }

  onCategoryFilterChanged($event) {
    console.log($event);
  }
}
