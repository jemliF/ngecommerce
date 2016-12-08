import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import {Http, Headers} from "@angular/http";

@Injectable()
export class ProductService {
  API_URL:string = 'http://localhost:8080/api/v1/products';

  constructor(public http:Http) {

  }

  getAll() {
    return this.http.get(this.API_URL)
      .map((res) => res.json());
  }
  get(id:string) {
    return this.http.get(this.API_URL + '/' + id)
      .map((res) => res.json());
  }
}
