import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRoutingModule } from './practice-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PracticeFooterComponent } from './component/practice-footer/practice-footer.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PracticeFooterComponent
  ],
  imports: [
    CommonModule,
    PracticeRoutingModule
  ]
})
export class PracticeModule { }
