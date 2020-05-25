import { Component, OnInit } from "@angular/core";
import { RestaurantsService } from "../restaurants.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  columnDef = [];
  data = [];
  searchTest;
  constructor(private _rService: RestaurantsService) {}

  ngOnInit() {
    this.getRestaurantsData();
    this.getColumnDef();
  }

  private getRestaurantsData = (param?: any) => {
    this._rService.getData().subscribe(ele => {
      this.data = ele;
    });
  };

  private getColumnDef = (param?: any) => {
    this.columnDef = [
      { prop: "Restaurant ID", displayName: "ID" },
      { prop: "Restaurant Name", displayName: "Name" },
      { prop: "Cuisines", displayName: "Cuisines" },
      { prop: "Average Cost for two", displayName: "Avg Cost for two" },
      { prop: "Currency", displayName: "Currency" },
      { prop: "Has Table booking", displayName: "Has Table booking" },
      { prop: "Has Online delivery", displayName: "Has Online delivery" },
      { prop: "Aggregate rating", displayName: "Agg rating " },
      { prop: "Rating color", displayName: "Rating clr" },
      { prop: "Rating text", displayName: "Rating txt" },
      { prop: "Votes", displayName: "Votes" }
    ];
  };
}
