import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PracticeFooterComponent } from './component/practice-footer/practice-footer.component';
import { HomeComponent } from './component/home/home.component';
import { ImgFormComponent } from './component/img-form/img-form.component';
import { MultiFormComponent } from './component/multi-form/multi-form.component';
import { NormFormComponent } from './component/norm-form/norm-form.component';


const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {path:'home',         component:HomeComponent},
      {path:'normForm',     component:NormFormComponent},
      {path:'imgForm',      component:ImgFormComponent},
      {path:'multiForm',    component:MultiFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule { }

export const practComponent = [
  DashboardComponent,PracticeFooterComponent,
  HomeComponent
]