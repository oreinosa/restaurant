import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "../admin/categories/categories.service";
import { Category } from "../shared/models/category";
import { tap, map } from "rxjs/operators";
import { ProductsService } from "../admin/products/products.service";
import { Product } from "../shared/models/product";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  categories: Category[];
  products: Product[];

  constructor(
    private categoriesService: CategoriesService,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.categoriesService
      .all()
      .pipe(tap(categories => console.log(categories)))
      .subscribe(categories => (this.categories = categories));

    this.productsService
      .all()
      .pipe(tap(products => console.log(products)))
      .subscribe(products => (this.products = products));
  }
}
