import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule, AdminComponent } from './admin-routing.module';
import { matAdmin } from '../../mat-admin';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    matAdmin
  ]
})
export class AdminModule { }
