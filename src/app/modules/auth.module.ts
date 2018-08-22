import { NgModule }                  from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';
import { CommonModule }       from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { LoginComponent } from '../components/login/login.component';
import {SignUpComponent} from '../components/sign-up/sign-up.component'

const routes: Routes = [
   { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signUp', component: SignUpComponent },
];

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes) 
  ],
  providers: [],
})
export class AuthModule { }