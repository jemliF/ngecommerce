import {Component} from '@angular/core';
import {NavbarComponent} from "./components/navbar/navbar.component";

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  name = 'Angular';
}
