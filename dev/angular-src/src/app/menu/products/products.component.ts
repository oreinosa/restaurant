import { Component, OnInit } from "@angular/core";
import { Product } from "../../shared/models/product";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      _id: "5b71bf5246b5d9118aaa06f1",
      imageURL: "productos/0b553950-9f1e-11e8-8c5d-2386a8f6ac3d.jpeg",
      name: "test",
      price: 1,
      cost: 1,
      category: {
        _id: "5b60a0c29f84741a63bf77ae",
        name: "Bebidas"
      }
    },
    {
      _id: "5b71bf5e46b5d9118aaa06f3",
      imageURL: "productos/12da1ec0-9f1e-11e8-8c5d-2386a8f6ac3d.png",
      name: "testing",
      price: 1,
      cost: 2,
      category: {
        _id: "5b60a0c29f84741a63bf77ae",
        name: "Bebidas"
      }
    },
    {
      _id: "5b71f71b46b5d9118aaa0c16",
      imageURL: "productos/4bdde730-9f3f-11e8-8c5d-2386a8f6ac3d.png",
      name: "frijoles",
      price: 1,
      cost: 1,
      category: {
        _id: "5b71f6f746b5d9118aaa0c13",
        name: "Extra"
      }
    }
  ];
  constructor() {}

  ngOnInit() {}
}
