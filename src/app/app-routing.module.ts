import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Alaleht1Component}  from './alaleht1/alaleht1.component';
import { Alaleht2Component} from './alaleht2/alaleht2.component';
import { Alaleht3Component } from './alaleht3/alaleht3.component';
import { Alaleht4Component } from './alaleht4/alaleht4.component';
const routes: Routes = [ 
   
    { path: 'alaleht1', component: Alaleht1Component },
    { path: 'alaleht2', component: Alaleht2Component},
    { path: 'alaleht3', component: Alaleht3Component },
    { path: 'alaleht4', component: Alaleht4Component}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }