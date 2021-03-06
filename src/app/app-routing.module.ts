import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { BarsComponent } from './food-and-beverage/bars/bars.component';
import { ResturantComponent } from './food-and-beverage/resturant/resturant.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ResortAndActivitiesComponent } from './lifestyle/resort-and-activities/resort-and-activities.component';
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component';

const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent},
  {  path: 'accomodation/rooms', component: RoomsComponent},

  { path: 'celebrations', component: CelebrationsComponent},
  { path: 'food-and-beverage', component: FoodAndBeverageComponent},
  { path: 'foodandbeverage', redirectTo: 'food-and-beverage', pathMatch: 'full'},
  { path: 'lifestyle' , component: LifestyleComponent},
  { path: 'lifestyle/excursions' , component: ExcursionsComponent},
  { path: 'lifestyle/experinces' , component: ExperiencesComponent},
  { path: 'lifestyle/resortandactivities' , component: ResortAndActivitiesComponent },
  { path: 'lifestyle/wellnessandspa' , component:  WellnessAndSpaComponent },
  { path: 'weddings', component: WeddingsComponent},
  { path: 'offers', component: OffersComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  {path: 'bars' , component: BarsComponent},
  {path: 'restro', component: ResturantComponent},
  { path: '' , component: HomeComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
