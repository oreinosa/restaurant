import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MenuComponent } from "./menu.component";
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: "menu", component: MenuComponent },
  { path: "menu/:category", component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
