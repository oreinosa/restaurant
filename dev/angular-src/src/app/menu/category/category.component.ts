import { Component, OnInit, Input } from "@angular/core";
import { Category } from "../../shared/models/category";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit {
  @Input()
  category: Category;
  hovered = false;

  constructor() {}

  ngOnInit() {}
}
