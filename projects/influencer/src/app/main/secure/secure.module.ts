import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecureComponent} from './secure.component';
import {ProfileComponent} from "./profile/profile.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StatsComponent} from './stats/stats.component';
import {RankingsComponent} from './rankings/rankings.component';


@NgModule({
  declarations: [
    SecureComponent,
    ProfileComponent,
    StatsComponent,
    RankingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SecureModule {
}
