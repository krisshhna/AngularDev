import { Component } from '@angular/core';
import { menu } from '../../practice-menu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  sideMenu:any = menu;
  
  ngOnInit(){
  }
}
