import { NgModule } from "@angular/core";

import { MenuRoutingModule } from "./menu-routing.module";
import { MenuComponent } from "./menu.component";
import { FiltersComponent } from "./filters/filters.component";
import { CategoryComponent } from "./category/category.component";
import { ProductsComponent } from "./products/products.component";
import { ProductOverviewComponent } from "./products/product-overview/product-overview.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [SharedModule, MenuRoutingModule],
  declarations: [
    MenuComponent,
    FiltersComponent,
    CategoryComponent,
    ProductsComponent,
    ProductOverviewComponent,
    ProductDetailComponent
  ]
})
export class MenuModule {}
