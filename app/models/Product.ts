export class Product {
  _id?:string;
  name:string;
  description:string;
  unitPrice:number;
  qte:number;
  category:string;
  imageUrl:string;


  constructor() {
    this.name = '';
    this.description = '';
    this.unitPrice = 0;
    this.qte = 0;
    this.category = '';
    this.imageUrl = '';
  }

}
