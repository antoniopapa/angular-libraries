import {Injectable} from '@angular/core';
import {RestService} from "common";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LinkService extends RestService {
  get endpoint(): string {
    return `${environment.influencer_api}/links`;
  }
}
