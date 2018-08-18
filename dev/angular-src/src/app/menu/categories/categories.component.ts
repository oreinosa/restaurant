import { CategoriesService } from './../../admin/categories/categories.service';
import { Category } from './../../shared/models/category';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  @Input() onlyName = false;
  @Input() hideCategories = false;
  @Input() listView = false;
  
  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoriesService.all().subscribe(categories => this.categories = categories);
  }

  onNavigate(categoryName: string) {
    let dashesCategory = categoryName.trim().replace(/\s+/g, "-").toLowerCase();
    this.router.navigate(['menu', dashesCategory])
  }

}
