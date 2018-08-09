import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-sidenav-content",
  templateUrl: "./sidenav-content.component.html",
  styleUrls: ["./sidenav-content.component.scss"]
})
export class SidenavContentComponent implements OnInit {
  @Input()
  actions: any[];
  @Input()
  links: any[];
  @Input()
  overlay: string;
  // tslint:disable-next-line:no-output-rename
  @Output("action")
  actionEmitter = new EventEmitter<string>();
  @Output()
  navToggle = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
