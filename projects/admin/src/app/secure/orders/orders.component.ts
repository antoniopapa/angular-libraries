import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {Auth} from "../../classes/auth";
import {Order} from "common";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  lastPage: number;

  constructor(
    private orderService: OrderService
  ) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(currentPage = 1) {
    this.orderService.all({page: currentPage}).subscribe(
      (res: any) => {
        this.orders = res.data;
        this.lastPage = res.meta.last_page;
      }
    );
  }

  export() {
    this.orderService.export().subscribe(
      res => {
        const blob = new Blob([res], {type: 'text/csv'});
        const downloadUrl = window.URL.createObjectURL(res);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'orders.csv';
        link.click();
      }
    )
  }

  canAccess(permissions) {
    return Auth.canAccess(permissions);
  }
}
