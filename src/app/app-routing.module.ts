import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterationComponent } from './registeration/registeration.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: 'register', component: RegisterationComponent },
  { path: 'home', component:HomeComponent}, 
  
  { path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
