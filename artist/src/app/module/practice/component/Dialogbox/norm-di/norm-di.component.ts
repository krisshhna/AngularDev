import { Component, Inject, OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-norm-di',
  templateUrl: './norm-di.component.html',
  styleUrl: './norm-di.component.css'
})

export class NormDiComponent {

  allDegrees:any = [{id:1, name:'SSC'}, {id:2, name:'HSC'}, {id:3, name:'BSC'}, {id:4, name:'MSC'}];
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public _fb:FormBuilder){}

  normForm = this._fb.group({
    firstName:      ['',[Validators.required]],
    lastName:       ['',[Validators.required]],
    emailId:        ['',[Validators.required, Validators.email]],
    dofBirth:       ['',[Validators.required]],
    phone:          ['',[Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
    gender:         ['',[Validators.required]],
    education:      ['',[Validators.required]],
    company:        ['',[Validators.required]],
    experience:     ['',[Validators.required]],
    package:        ['',[Validators.required]],
    degrees:        this._fb.array([])
  })

  addItems(){
    const item = this.normForm.get('degrees') as FormArray;
    item.push(this.createItems());
  }

  createItems(){
   return this._fb.group({
      degreeType:   ['',[Validators.required]],
      percent:   ['',[Validators.required]]
   })
  }

  get getAllItems(){
    return this.normForm.get('degrees') as FormArray; 
  }

  insertFile(event:any){

  }

  ngSubmitRecord(){
    console.log(this.normForm.value);
  }
}
