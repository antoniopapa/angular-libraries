import {Component, OnInit} from '@angular/core';
import {StatsService} from "../../../services/stats.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  orders = [];

  constructor(
    protected statsService: StatsService
  ) {
  }

  ngOnInit(): void {
    this.statsService.get().subscribe(
      (res: any[]) => {
        this.orders = res;
      }
    );
  }

  link(code) {
    return `${environment.checkout_url}/${code}`;
  }

}
