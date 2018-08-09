import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-crud-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  @Input()
  displayedColumns: string;
  @Input()
  className: string;
  @Input()
  objects: any[];

  constructor() {}

  ngOnInit() {}
}
