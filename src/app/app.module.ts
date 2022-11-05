import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { D1Component } from './d1/d1.component';
import { D2Component } from './d2/d2.component';
import { D3Component } from './d3/d3.component';
import { D4Component } from './d4/d4.component';
import { D5Component } from './d5/d5.component';

@NgModule({
  declarations: [
    AppComponent,
    D1Component,
    D2Component,
    D3Component,
    D4Component,
    D5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
