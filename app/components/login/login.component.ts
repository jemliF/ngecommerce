import {Component} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Router} from "@angular/router";
import {ToasterService} from "angular2-toaster/angular2-toaster";

@Component({
  selector: 'login',
  templateUrl: 'app/components/login/login.component.html'
})
export class LoginComponent {
  private email:string;
  private password:string;

  constructor(private router:Router, private clientService:ClientService, private toasterService:ToasterService) {

  }

  login() {
    console.log(this.email);
    console.log(this.password);
    this.clientService.login(this.email, this.password)
      .subscribe((res) => {
        this.toasterService.pop('success', 'Login Successfull!', 'Welcome');
        console.log(res);
        localStorage.setItem('client', JSON.stringify(res));
        this.router.navigate(['']);
      }, (err)=> {
        this.toasterService.pop('error', 'Login failed', 'Something went wrong, please try again!');
        console.error(err);
      });
  }

}
