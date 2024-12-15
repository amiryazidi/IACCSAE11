import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  AgeMax!:number;
  color!:string;
  title: string = 'Welcome to the Home Page!';
  user=[
    {id:1, name:'John', age:25,email:"john@gmail.com"},
    {id:2, name:'AMir', age:30,email:"amir@gmail.com"},
    {id:3, name:'nada', age:35,email:"nada@gmail.com"},
  ]
  show(){
    alert('Hello');
  }
}
