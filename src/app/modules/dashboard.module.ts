import { NgModule }                  from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';
import { CommonModule }       from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {DashboardComponent} from '../components/dashboard/dashboard.component';

const routes: Routes = [
   { path: '', component: DashboardComponent },
   { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    DashboardComponent
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
export class DashboardModule { }