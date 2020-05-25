import { Component, OnInit, Input } from "@angular/core";
import { TableSortPipe } from '../table-sort.pipe';
@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.css"]
})
export class DataTableComponent implements OnInit {
  @Input("columnDef") columnDef;
  @Input("height") height;
  dataSource = [];
  prop;
  orderBy = "asc";
  constructor(private _tableSortPipe:TableSortPipe) { }

  ngOnInit() { }

//Sorting The Elements
  
  @Input()
  set data(data: any[]) {
    this.dataSource = [...data];
  }

  doOrder = (prop: string) => {
    this.prop = prop;
    this.orderBy = this.orderBy == "asc" ? "desc" : "asc";
  };

  getClass = prop => {
    return {
      "fa-sort": prop != this.prop,
      "fa-caret-up": prop == this.prop && this.orderBy == "asc",
      "fa-caret-down": prop == this.prop && this.orderBy == "desc"
    };
  };
}
