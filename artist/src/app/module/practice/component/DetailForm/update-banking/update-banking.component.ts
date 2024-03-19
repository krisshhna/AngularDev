import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-banking',
  templateUrl: './update-banking.component.html',
  styleUrl: './update-banking.component.css'
})
export class UpdateBankingComponent {
  formBank!:FormGroup;
  @Input() formGroupName!:string;

  constructor(public rootDirective:FormGroupDirective, public fb:FormBuilder){}

  ngOnInit(){
    this.formBank   = this.rootDirective.control.get(this.formGroupName) as FormGroup;
    // this.addBank();
  }

  addBank(){
    let item = this.formBank.get('newBank') as FormArray;
    item.push(this.createBankForm());
  }

  createBankForm(){
    this.fb.group({
      accountType:  ['',[Validators.required]],
      accountNo:    ['',[Validators.required]],
      ifscCode:     ['',[Validators.required]],
      accountName:  ['',[Validators.required]]
    })
  }

  get newBankDetail(){
    return this.formBank.get('newBank') as FormArray;
  }
}
