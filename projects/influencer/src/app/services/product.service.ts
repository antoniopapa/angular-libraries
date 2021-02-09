import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {RestService} from "common";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends RestService {
  get endpoint(): string {
    return `${environment.influencer_api}/products`;
  }
}
