import { Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-norm-di',
  templateUrl: './norm-di.component.html',
  styleUrl: './norm-di.component.css'
})

export class NormDiComponent {
  allDegrees:any = [{id:1, name:'HSC'},{id:2, name:'Degree'}, {id:3, name:'Master Degree'},{id:4, name:'phd'}];
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public _fb:FormBuilder){}

  normForm = this._fb.group({
    firstName:      ['',[Validators.required]],
    lastName:       ['',[Validators.required]],
    emailId:        ['',[Validators.required,Validators.email]],
    dofBirth:       ['',[Validators.required]],
    phone:          ['',[Validators.required,Validators.pattern(/^\+?\d{10,15}$/), Validators.maxLength(10)]],
    gender:         ['',[Validators.required]],
    // hobbies:        ['',[Validators.required]],
    education:      ['',[Validators.required]],
    company:        ['',[Validators.required]],
    experience:     ['',[Validators.required]],
    package:        ['',[Validators.required]],
  });

  ngOnInit(){
  }

  onFormSubmit(){
    console.log(this.normForm);
  }
}
