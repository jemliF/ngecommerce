import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";
import {SearchComponent} from "./components/search/search.component";
import {LoginComponent} from "./components/login/login.component";
import {routing} from "./app.routes";
import {SignupComponent} from "./components/signup/signup.component";
import {CartComponent} from "./components/cart/cart.component";
import {ClientService} from "./services/client.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {ToasterModule} from "angular2-toaster/angular2-toaster";
import {Ng2CloudinaryModule} from "ng2-cloudinary/ng2-cloudinary";
import {AuthGuard} from "./auth.guard";
import {ProductService} from "./services/product.service";
import {CategoryService} from "./services/category.service";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, routing, ToasterModule, Ng2CloudinaryModule],
  declarations: [AppComponent, NavbarComponent, HomeComponent, SearchComponent, LoginComponent, SignupComponent, CartComponent],
  bootstrap: [AppComponent],
  providers: [ClientService, AuthGuard, ProductService, CategoryService]
})
export class AppModule {
}
