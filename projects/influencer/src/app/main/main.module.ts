import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {NavComponent} from "./nav/nav.component";
import {HeaderComponent} from "./header/header.component";
import {ProductsComponent} from "./products/products.component";
import {RouterModule} from "@angular/router";
import {SecureModule} from "./secure/secure.module";


@NgModule({
  declarations: [
    MainComponent,
    NavComponent,
    HeaderComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SecureModule
  ]
})
export class MainModule {
}
