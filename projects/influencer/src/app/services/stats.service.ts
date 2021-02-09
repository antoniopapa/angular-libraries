import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(protected http: HttpClient) {
  }

  get() {
    return this.http.get(`${environment.influencer_api}/stats`);
  }

  rankings() {
    return this.http.get(`${environment.influencer_api}/rankings`);
  }
}
