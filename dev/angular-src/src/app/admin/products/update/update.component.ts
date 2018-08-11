import { CategoriesService } from './../../categories/categories.service';
import { Component, ViewChild, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductsService } from "../products.service";
import { map } from "rxjs/operators";
import { NotificationsService } from "./../../../notifications/notifications.service";
import { Update } from "../../../shared/helpers/update";
import { Category } from "../../../shared/models/category";
import { Product } from "../../../shared/models/product";
import { NgForm } from '@angular/forms';
import { UploadComponent } from '../../../upload/upload.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.scss", "../../../shared/styles/crud-update.scss"]
})
export class UpdateComponent extends Update<Product> implements OnInit {
  @ViewChild(UploadComponent) upload: UploadComponent;
  categories: Category[];
  constructor(
    public service: ProductsService,
    public notifications: NotificationsService,
    public router: Router,
    public route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {
    super(service, notifications, router, route);
  }

  ngOnInit() {
    super.ngOnInit();
    this.categoriesService
      .all().pipe(
        // tslint:disable-next-line:arrow-return-shorthand
        map(categories => categories.map(category => { return { name: category.name, _id: category._id } as Category; }))
      )
      .subscribe((categories: Category[]) => this.categories = categories);
  }

  compareCategoryFn(a: Category, b: Category): boolean {
    if (a && b) {
      return a._id === b._id;
    }
    return false;
  }

  onSubmit(form: NgForm) {
    this.upload.onSubmit("products", this.object.name).subscribe(
      (imageURL: string) => {
        // console.log(imageURL);
        // this.product.imageURL = imageURL;
        const imageCtrl = form.controls.imageURL;
        imageCtrl.setValue(imageURL); // set imageURL input value to the resolt of the upload POST event
        // form.setValue({ ...form.value, "imageURL": res.data });
        // console.log(form.value);
        super.onSubmit(form);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
