import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    constructor(private ps: ProductService, private route:Router) { }

  formLogin = new FormGroup({
    id: new FormControl('', [Validators.required]),
    title: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required]),
    quantity : new FormControl('',[Validators.required]),
    like : new FormControl('',Validators.required)
    })


    add(){
      this.ps.products.push(this.formLogin.value as any)
      this.route.navigateByUrl('/product')
    }
}
