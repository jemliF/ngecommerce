import {Component} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: 'app/components/login/login.component.html'
})
export class LoginComponent {
  private email:string;
  private password:string;

  constructor(private router:Router, private clientService:ClientService) {

  }

  login() {
    this.clientService.login(this.email, this.password)
      .subscribe((res) => {
        console.log(res);
      }, (err)=> {
        console.error(err);
      });
  }

}
