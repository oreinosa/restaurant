import { ShoppingCartItem } from './../../../shopping-cart/shopping-cart-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-menu-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  @Input()
  product: Product;
  @Input()
  byCategory: false;
  @Output()
  added = new EventEmitter<ShoppingCartItem>();

  amount = 0;
  constructor() { }

  ngOnInit() {
  }

  addProduct() {
    this.added.emit({ amount: this.amount, product: this.product });
    this.amount = 0;
  }


}
