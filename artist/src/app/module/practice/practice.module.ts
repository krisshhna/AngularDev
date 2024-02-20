import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRoutingModule, practComponent } from './practice-routing.module';
import { matAdmin } from '../../mat-admin';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NormDiComponent } from './component/Dialogbox/norm-di/norm-di.component';
import { MultiDiComponent } from './component/Dialogbox/multi-di/multi-di.component';
import { ImgDiComponent } from './component/Dialogbox/img-di/img-di.component';


@NgModule({
  declarations: [
    practComponent,
    NormDiComponent,
    MultiDiComponent,
    ImgDiComponent
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
