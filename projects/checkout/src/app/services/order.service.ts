import {Injectable} from '@angular/core';
import {RestService} from "common";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService extends RestService {
  get endpoint(): string {
    return `${environment.checkout_api}/orders`;
  }

  confirm(data) {
    return this.http.post(`${environment.checkout_api}/orders/confirm`, data);
  }
}
