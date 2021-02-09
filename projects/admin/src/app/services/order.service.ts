import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {RestService} from "common";

@Injectable({
  providedIn: 'root'
})
export class OrderService extends RestService {
  get endpoint(): string {
    return `${environment.admin_api}/orders`;
  }

  export() {
    return this.http.get(`${environment.admin_api}/export`, {responseType: 'blob'});
  }

  chart() {
    return this.http.get(`${environment.admin_api}/chart`);
  }
}
