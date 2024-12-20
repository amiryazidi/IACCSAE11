import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../services/residence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  residenceForm: FormGroup;
  id!:number
  residence!:Residence

  constructor(private fb: FormBuilder, private rs: ResidenceService, private rt:Router,private act:ActivatedRoute) {
    this.residenceForm = this.fb.group({
      id: [{ value: this.generateId(), disabled: true }, Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      image: ['../../assets/images/R1.jpg', Validators.required], // URL statique
      status: ['', Validators.required],
    });
  }

  ngOnInit(){
    //1- recuperer l'id de l'url
    this.id= this.act.snapshot.params['id']
    //2- recuperer l'objet
    this.rs.getResidenceById(this.id).subscribe(
        data => {
          this.residence = data 
          console.log(this.residence)
          //3- patcher les données dans le formulaire
          this.residenceForm.patchValue(this.residence)
        }
    )
  }
  generateId(): number {
    return Math.floor(Math.random() * 10000) + 1; // Génération d'un ID aléatoire
  }
  addResidence() {
    if (this.residenceForm.valid) {

      if (this.id){
        this.rs.updateResidence(this.residenceForm.value,this.id).subscribe(
          {
            next:()=> this.rt.navigate(['/residence']),
            error: (err)=> console.log()
          }
        )
      }else{
  // console.log('Residence data:', this.residenceForm.value);
      // this.rs.listResidences.push(this.residenceForm.value);
      // this.rt.navigate(['/residence']);
      this.rs.addResidence(this.residenceForm.value).subscribe({
        next:()=> this.rt.navigate(['/residence']),
        error: (err)=> console.log()
      }
     )
      }
    
    } else {
      console.log('Form is invalid');
    }
  }
}
