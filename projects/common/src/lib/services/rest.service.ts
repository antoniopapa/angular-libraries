import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export abstract class RestService {

  abstract get endpoint(): string;

  constructor(protected http: HttpClient) {
  }

  all(filters?: { page?: number, s?: string }) {
    let url = this.endpoint;
    let arr = [];

    if (filters?.page) {
      arr.push(`page=${filters.page}`);
    }

    if (filters?.s) {
      arr.push(`s=${filters.s}`);
    }

    if (arr) {
      url += '?' + arr.join('&')
    }

    return this.http.get(url);
  }

  get(id) {
    return this.http.get(`${this.endpoint}/${id}`);
  }

  create(data) {
    return this.http.post(this.endpoint, data);
  }

  update(id: number, data) {
    return this.http.put(`${this.endpoint}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}
