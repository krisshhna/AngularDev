import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NormDiComponent } from '../Dialogbox/norm-di/norm-di.component';


@Component({
  selector: 'app-norm-form',
  templateUrl: './norm-form.component.html',
  styleUrl: './norm-form.component.css'
})
export class NormFormComponent {
  constructor(public dialog:MatDialog){}

  ngOnInit(){
  }

  openDialog(){
    const dialogRef = this.dialog.open(NormDiComponent,{
      disableClose: false,
      data: { campaignId:'hello world'}
    });

    dialogRef.afterClosed().subscribe((result:any)=>{
      console.log('Dialog is closed');
    })
  }
}