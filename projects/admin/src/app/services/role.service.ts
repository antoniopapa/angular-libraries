import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {RestService} from "common";

@Injectable({
  providedIn: 'root'
})
export class RoleService extends RestService {
  get endpoint(): string {
    return `${environment.admin_api}/roles`;
  }
}
