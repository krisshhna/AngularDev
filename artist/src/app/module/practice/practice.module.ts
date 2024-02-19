import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRoutingModule, practComponent } from './practice-routing.module';
import { matAdmin } from '../../mat-admin';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    practComponent
  ],
  imports: [
    CommonModule,
    PracticeRoutingModule,
    matAdmin,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PracticeModule { }
