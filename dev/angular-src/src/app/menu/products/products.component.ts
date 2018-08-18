import { ShoppingCartItem } from './../../shopping-cart/shopping-cart-item';
import { ShoppingCartService } from './../../shopping-cart/shopping-cart.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MenuService } from './../menu.service';
import { CategoriesService } from './../../admin/categories/categories.service';
import { map, tap, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { Product } from '../../shared/models/product';
import { Category } from '../../shared/models/category';
import { capitalize } from '../../shared/helpers/methods';
import { NotificationsService } from '../../notifications/notifications.service';

@Component({
  selector: "app-menu-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  category: string;
  products: Product[];
  categories: Category[];
  constructor(
    private menuService: MenuService,
    private categoriesService: CategoriesService,
    private shoppingCartService: ShoppingCartService,
    private router: Router,
    private route: ActivatedRoute,
    private notifications: NotificationsService
  ) { }

  ngOnInit() {
    this.categoriesService.all().subscribe(categories => this.categories = categories);

    this.route.paramMap.pipe(
      takeUntil(this.ngUnsubscribe),
      map(params => params.get('category')),
      map(category => capitalize(category.replace(/-+/g, " "))),
      tap(category => console.log(category)),
      tap(category => this.category = category),
      switchMap(category => this.menuService.allByCategory(category)),
      tap(products => console.log(products)),
    )
      .subscribe(products => this.products = products);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onAddItem(item: ShoppingCartItem) {
    this.shoppingCartService.addItem(item);
    this.notifications.show(`Se agregó ${item.amount}x ${item.product.name}`, 'Carrito', 'success');
  }

}
