import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImgDiComponent } from '../Dialogbox/img-di/img-di.component';

@Component({
  selector: 'app-img-form',
  templateUrl: './img-form.component.html',
  styleUrl: './img-form.component.css'
})
export class ImgFormComponent {

  constructor(public dialog:MatDialog){}

  openDialog(){
    const dialogBox = this.dialog.open(ImgDiComponent,{
      disableClose:false,
      data: {formRecord:'helloWorld'}
    });

    dialogBox.afterClosed().subscribe((res)=>{
      console.log('Dialog box has closed');
    })
  }
}
