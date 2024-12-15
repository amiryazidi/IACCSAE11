import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products:any =[]
  constructor(private ps: ProductService) { }

    ngOnInit(){
      this.products=this.ps.products
    }


    increment(p:any){
      p.like++;

    }
}
