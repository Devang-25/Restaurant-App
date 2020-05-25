import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes:Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'dashboard'
  },{
    path:'dashboard',
    component:DashboardComponent
  },{
    path:'**',
    component:PageNotFoundComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() { }
}
