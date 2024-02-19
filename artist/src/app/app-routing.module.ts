import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./module/website/website.module').then((m)=>m.WebsiteModule)
  },
  {
    path:'admin',
    loadChildren:()=>import('./module/admin/admin.module').then((x)=>x.AdminModule)
  },
  {
    path:'self',
    loadChildren:()=>import('./module/practice/practice.module').then((u)=>u.PracticeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
