import {Component, OnInit} from '@angular/core';
import {StatsService} from "../../../services/stats.service";

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent implements OnInit {
  rankings = [];

  constructor(
    protected statsService: StatsService
  ) {
  }

  ngOnInit(): void {
    this.statsService.rankings().subscribe(
      (res: any[]) => {
        this.rankings = res;
      }
    )
  }

}
