import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CheckoutComponent} from "./checkout/checkout.component";
import {SuccessComponent} from "./success/success.component";
import {ErrorComponent} from "./error/error.component";


const routes: Routes = [
  {path: 'success', component: SuccessComponent},
  {path: 'error', component: ErrorComponent},
  {path: ':code', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
