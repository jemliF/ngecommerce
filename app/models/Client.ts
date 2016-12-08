export class Client {
  _id?:string;
  firstname:string;
  lastname:string;
  email:string;
  password:string;
  avatarUrl:string;


  constructor() {
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.password = '';
    this.avatarUrl = '';
  }

  public setAvatarUrl(avatarUrl:string) {
    this.avatarUrl = avatarUrl;
  }

}
