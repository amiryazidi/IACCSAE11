import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { DetailResidenceComponent } from './detail-residence/detail-residence.component';

const routes: Routes = [
  {path:'home' , component:  HomeComponent},
  {path: '', redirectTo: '/home' , pathMatch: 'full'}, //redirection par défaut
  {path: 'residence'  , component: ResidencesComponentComponent},
  {path: 'form'  , component: ReactiveFormComponent},
  {path: 'product'  , component: ProductComponent},
  {path: 'addRes'  , component: AddResidenceComponent},
  {path: 'details/:id'  , component: DetailProdComponent},
  {path: 'detailR/:id'  , component: DetailResidenceComponent},
  {path: 'updateRes/:id'  , component: AddResidenceComponent },
  {path: 'addP'  , component: AddProductComponent},
  {path: '**' , component : NotFoundComponent}, //path not found

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
