import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, ManageuserComponent,AddsuperuserComponent,AddcompanyComponent,ManagecompanyComponent } from './dashboard/index';
import { DashboardComponent } from './dashboard/index';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './guards/index';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './pages/main/main.component';

// ,canActivate: [AuthGuard],
const routes: Routes =[
    { path: '',       component: MainComponent  },
    { path: 'login',  component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '*', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
