import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  products=[
    {id:1, title:'iphone15', price:2500,quantity:5,like:0,image : '../../assets/images/iphone1.jpg'},
    {id:2, title:'iphone16', price:3000,quantity:0,like:0,image : '../../assets/images/iphone2.jpg'},
    {id:3, title:'iphone14', price:2000,quantity:2, like:0,image : '../../assets/images/iphone3.jpg'},
   ]
  constructor() { }
}
