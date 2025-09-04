import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login';
import { RegisterComponent } from '../register/register';
import { HomeComponent } from '../home/home';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];

@NgModule({
  exports: [RouterModule],
})
export class AppRoutingModule {}
