import {Component} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Router} from "@angular/router";
import {CloudinaryOptions, CloudinaryUploader} from "ng2-cloudinary/ng2-cloudinary";
import {ToasterService} from "angular2-toaster/angular2-toaster";
import {Client} from "../../models/Client";

@Component({
  selector: 'signup',
  templateUrl: 'app/components/signup/signup.component.html'
})
export class SignupComponent {
  client:Client = new Client({});
  cloudinaryOptions:CloudinaryOptions = new CloudinaryOptions({
    cloud_name: 'dqihnnzaj',
    upload_preset: 'd6ad8klj',
    autoUpload: true
  });

  constructor(protected router:Router, private clientService:ClientService, private toasterService:ToasterService) {
    this.uploader.onSuccessItem = function (item:any, response:string, status:number, headers:any) {
      console.log(response);
      this.client.avatarUrl = JSON.parse(response).url;
      return {item, response, status, headers};
    };
  }

  uploader:CloudinaryUploader = new CloudinaryUploader(this.cloudinaryOptions);


  signup() {
    console.log(this.client);
    this.clientService.signup(this.client)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['login']);
      }, (err)=> {
        console.error(err);
        this.toasterService.pop('error', 'Signup failed', 'Something went wrong, please try again!');
      });
  }
}
