import {Component} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: 'app/components/navbar/navbar.component.html',
})
export class NavbarComponent {

  constructor(private clientService:ClientService, private router:Router) {

  }

  logout() {
    this.clientService.logout();
    this.router.navigate(['login']);
  }
}
