import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {SearchComponent} from "./components/search/search.component";
import {SignupComponent} from "./components/signup/signup.component";
import {CartComponent} from "./components/cart/cart.component";
import {ModuleWithProviders} from "@angular/core";
const routes:Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
]

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);
