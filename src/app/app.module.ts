import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxGaugeModule } from 'ngx-gauge';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AvalehtComponent} from './avaleht/avaleht.component';

import { AppRoutingModule } from './app-routing.module';

import { Alaleht1Component } from './alaleht1/alaleht1.component';
import { Alaleht2Component } from './alaleht2/alaleht2.component';
import { Alaleht3Component } from './alaleht3/alaleht3.component';
import { Alaleht4Component } from './alaleht4/alaleht4.component';

//import { TabGroupAlignExample } from './tabs/tabs.component';
import { TabComponent } from './tabx/tabx.component';

import { ElujoudComponent } from './elujoud/elujoud.component';
import { KoondindComponent } from './koondind/koondind.component';
import { Koondind2Component } from './koondind2/koondind2.component';
import { Koondind3Component } from './koondind3/koondind3.component';
import { Koondind4Component } from './koondind4/koondind4.component';
import { Koondind5Component } from './koondind5/koondind5.component';
import { Koondind6Component } from './koondind6/koondind6.component';
import { Koondind7Component } from './koondind7/koondind7.component';
import { Yld1Component } from './yld1/yld1.component';
import { Yld2Component } from './yld2/yld2.component';
import { Yld3Component } from './yld3/yld3.component';
import { Yld4Component } from './yld4/yld4.component';
import { Yld5Component } from './yld5/yld5.component';
import { Hetk1Component } from './hetk1/hetk1.component';
import { Hetk2Component } from './hetk2/hetk2.component';
import { Hetk3Component } from './hetk3/hetk3.component';
import { Hetk4Component } from './hetk4/hetk4.component';
import { Hetk5Component } from './hetk5/hetk5.component';
import { Hetk6Component } from './hetk6/hetk6.component';
import { Hetk7Component } from './hetk7/hetk7.component';
import { Progn1Component } from './progn1/progn1.component';
import { Progn2Component } from './progn2/progn2.component';
import { Progn3Component } from './progn3/progn3.component';
import { Progn4Component } from './progn4/progn4.component';
import { FlrshComponent } from './flrsh/flrsh.component';
import { Varav1Component } from './varav1/varav1.component';
import { Varav2Component } from './varav2/varav2.component';
import { Varav3Component } from './varav3/varav3.component';
//import { Graaf1Component } from './graaf1/graaf1.component';

import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  imports: [
    BrowserModule,
    NgxEchartsModule,
    
    NgxGaugeModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: AvalehtComponent },
      //{ path: '', component: ProductListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    AvalehtComponent,
    Alaleht1Component,
    Alaleht2Component,
    Alaleht3Component,
    Alaleht4Component,
    ElujoudComponent,
    KoondindComponent,
    Koondind2Component,
    Koondind3Component,
    Koondind4Component,
    Koondind5Component,
    Koondind6Component,
    Koondind7Component,
    TabComponent,
    Yld1Component,
    Yld2Component,
    Yld3Component,
    Yld4Component,
    Yld5Component,
    Hetk1Component,
    Hetk2Component,
    Hetk3Component,
    Hetk4Component,
    Hetk5Component,
    Hetk6Component,
    Hetk7Component,
    Progn1Component,
    Progn2Component,
    Progn3Component,
    Progn4Component,
    FlrshComponent,
    Varav1Component,
    Varav2Component,
    Varav3Component
    
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/