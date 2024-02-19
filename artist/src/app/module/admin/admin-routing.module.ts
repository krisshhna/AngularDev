import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HeaderComponent } from './components/header/header.component';
import { TestingComponent } from './components/testing/testing.component';

const routes: Routes = [
  {
    path:'',
    component:HeaderComponent,
    children:[
      {path:'banner',     component:BannerComponent},
      {path:'about-us',   component:AboutusComponent},
      {path:'testing',    component:TestingComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export const AdminComponent = [
  HeaderComponent, FooterComponent,
  BannerComponent, AboutusComponent,
  TestingComponent
]