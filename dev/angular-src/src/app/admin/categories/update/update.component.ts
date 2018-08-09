import { Component } from "@angular/core";
import { Category } from "../../../shared/models/category";
import { Router, ActivatedRoute } from "@angular/router";
import { CategoriesService } from "../categories.service";
import { NotificationsService } from "../../../notifications/notifications.service";
import { Update } from "../../../shared/helpers/update";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.scss"]
})
export class UpdateComponent extends Update<Category> {
  constructor(
    public service: CategoriesService,
    public notifications: NotificationsService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    super(service, notifications, router, route);
  }
}
