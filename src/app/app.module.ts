import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ScrollDispatcher, ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { RestaurantsService } from "./restaurants.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DataTableComponent } from './data-table/data-table.component';
import { AuthenticationInterceptorService } from './authentication-interceptor.service';
import { TableFilterPipe } from './table-filter.pipe';
import { TableSortPipe } from './table-sort.pipe';
import { HighlightPipe } from './highlight.pipe';

const modules = [
  BrowserModule,
  FormsModule,
  AppRoutingModule,
  HttpClientModule,
  ScrollingModule
  ]

  const components = [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    PageNotFoundComponent
  ]

@NgModule({
  imports: [modules],
  declarations: [components, DataTableComponent, TableFilterPipe, TableSortPipe, HighlightPipe],
  bootstrap: [AppComponent],
  providers: [TableSortPipe,ScrollDispatcher,{ provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptorService, multi: true}]
})
export class AppModule { }
