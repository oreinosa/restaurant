import { OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { switchMap, tap, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { DAO } from "./dao";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { environment } from "../../../environments/environment";

export class List<T> implements OnInit, OnDestroy {
  public ngUnsubscribe = new Subject();
  public objects: T[];
  public dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(
    public service: DAO<T>,
    public router: Router,
    public displayedColumns: string[]
  ) {
    if (!environment.production) {
      const idIndex = this.displayedColumns.findIndex(
        columnName => columnName === "_id" || columnName === "id"
      );
      this.displayedColumns.splice(idIndex, 1);
    }
  }

  ngOnInit() {
    this.service
      .all()
      .pipe(
        switchMap(() => this.service.objects),
        takeUntil(this.ngUnsubscribe),
        tap(objects => {
          console.log(`${this.service.collectionName} : `, objects);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.objects = objects;
        })
      )
      .subscribe((objects: T[]) => (this.dataSource.data = objects));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onAction(action: string, object: T) {
    let _id = "";
    if (object) {
      _id = object["_id"];
      this.service.setSelectedObject(object);
    }
    this.router.navigate(["admin", this.service.apiRoute, action, _id]);
  }
}
