import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  login = new FormControl ('',[Validators.required,Validators.minLength(3)]);
  pwd = new FormControl ('',[Validators.required,Validators.maxLength(6)]);
  email = new FormControl('', Validators.required)



      formLogin = new FormGroup({
        login : new FormControl ('',[Validators.required,Validators.minLength(3)]),
        pwd : new FormControl ('',[Validators.required,Validators.maxLength(6)]),
        email : new FormControl('', Validators.required)
      })



}
