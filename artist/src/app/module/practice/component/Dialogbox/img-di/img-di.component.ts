import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-img-di',
  templateUrl: './img-di.component.html',
  styleUrl: './img-di.component.css'
})
export class ImgDiComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public _fb:FormBuilder){}


  imgForm = this._fb.group({
    'name':       ['',[Validators.required]],
    'fileType':   ['',[Validators.required]],
    'fileName:':  ['',[Validators.required]]
  });

  ngOnInit(){
    // console.log(this.data);
  }

  submitRecord(){
    console.log(this.imgForm.value);
  }
}
