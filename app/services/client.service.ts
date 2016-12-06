import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import {Http, Headers} from "@angular/http";

@Injectable()
export class ClientService {
  API_URL:string = 'http://localhost:8080/api/v1/clients';

  constructor(public http:Http) {

  }

  login(email:string, password:string) {
    var headers = new Headers();
    return this.http.post(this.API_URL + '/login', {email: email, password: password}, {headers: headers})
      .map(res => res.json());
  }

  signup(client:any) {
    var headers = new Headers();
    return this.http.post(this.API_URL, client, {headers: headers})
      .map(res => res.json());
  }

  isLoggedIn() {
    return localStorage.getItem('client') !== null;
  }
}
