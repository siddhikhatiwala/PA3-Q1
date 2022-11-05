import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { D1Component } from './d1/d1.component';
import { D2Component } from './d2/d2.component';
import { D3Component } from './d3/d3.component';
import { D4Component } from './d4/d4.component';
import { D5Component } from './d5/d5.component';

const routes: Routes = [
  {path:"d1", component: D1Component},
  {path:"d2", component: D2Component},
  {path:"d3", component: D3Component},
  {path:"d4", component: D4Component},
  {path:"d5", component: D5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
