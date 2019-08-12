import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterationComponent } from './registeration/registeration.component';
import {HomeComponent} from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import {DirectAccessGuardService } from './direct-access-guard.service';


const routes: Routes = [
  { path: 'register', component: RegisterationComponent },
  { path: 'home', component:HomeComponent, canActivate: [DirectAccessGuardService]}, 
  { path:'users', component:UserListComponent},
  { path:'login', component:LoginComponent},
  
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
