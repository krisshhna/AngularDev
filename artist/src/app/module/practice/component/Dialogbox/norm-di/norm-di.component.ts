import { Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-norm-di',
  templateUrl: './norm-di.component.html',
  styleUrl: './norm-di.component.css'
})
export class NormDiComponent {
 constructor(@Inject(MAT_DIALOG_DATA) public data:any){}

  ngOnInit(){
  }
}
