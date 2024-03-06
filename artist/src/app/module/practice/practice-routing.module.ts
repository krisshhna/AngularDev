import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PracticeFooterComponent } from './component/practice-footer/practice-footer.component';
import { HomeComponent } from './component/home/home.component';
import { ImgFormComponent } from './component/img-form/img-form.component';
import { MultiFormComponent } from './component/multi-form/multi-form.component';
import { NormFormComponent } from './component/norm-form/norm-form.component';
import { NormDiComponent } from './component/Dialogbox/norm-di/norm-di.component';
import { ImgDiComponent } from './component/Dialogbox/img-di/img-di.component';
import { MultiDiComponent } from './component/Dialogbox/multi-di/multi-di.component';
import { DetailFormComponent } from './component/detail-form/detail-form.component';


const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {path:'home',         component:HomeComponent},
      {path:'normForm',     component:NormFormComponent},
      {path:'imgForm',      component:ImgFormComponent},
      {path:'multiForm',    component:MultiFormComponent},
      {path:'detail',       component:DetailFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule { }

export const practComponent = [
  DashboardComponent, PracticeFooterComponent, HomeComponent,
  NormFormComponent, ImgFormComponent, MultiFormComponent,
  NormDiComponent, ImgDiComponent, MultiDiComponent, DetailFormComponent
]