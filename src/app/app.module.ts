import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailResidenceComponent } from './detail-residence/detail-residence.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    DetailProdComponent,
    ReactiveFormComponent,
    ProductComponent,
    AddProductComponent,
    ResidencesComponentComponent,
    AddResidenceComponent,
    DetailResidenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
