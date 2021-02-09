import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../services/order.service";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {
  }

  ngOnInit(): void {
    const source = this.route.snapshot.queryParams.source;

    this.orderService.confirm({
      source: source
    }).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
