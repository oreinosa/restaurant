import { Component, ViewChild } from "@angular/core";
import { Category } from "../../../shared/models/category";
import { Router, ActivatedRoute } from "@angular/router";
import { CategoriesService } from "../categories.service";
import { NotificationsService } from "../../../notifications/notifications.service";
import { Update } from "../../../shared/helpers/update";
import { UploadComponent } from "../../../upload/upload.component";
import { NgForm } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: [
    "./update.component.scss",
    "../../../shared/styles/crud-update.scss"
  ]
})
export class UpdateComponent extends Update<Category> {
  @ViewChild(UploadComponent)
  upload: UploadComponent;
  constructor(
    public service: CategoriesService,
    public notifications: NotificationsService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    super(service, notifications, router, route);
  }

  onSubmit(form: NgForm) {
    this.upload.onSubmit(this.service.apiRoute).subscribe(
      (imageURL: string) => {
        if (imageURL) {
          // console.log('new imageURL ', imageURL);
          const imageCtrl = form.controls.imageURL;
          imageCtrl.setValue(imageURL); // set imageURL input value to the resolt of the upload POST event
        }
        console.log(form.value);
        super.onSubmit(form);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
