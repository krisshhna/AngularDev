import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrl: './detail-form.component.css'
})
export class DetailFormComponent {
  allList = [
    {id:1,  checked:false, name:'Update member'},
    {id:2,  checked:false, name:'Update Bank Details'},
    {id:3,  checked:false, name:'update Education Details'},
    {id:4,  checked:false, name:'update companies Details'},
    {id:5,  checked:false, name:'Update Family Dependent Details'},
    {id:6,  checked:false, name:'Update Childrens Details'},
  ];

  formList = [
    {id:1, alId:0, checked:true, name: 'Member Details'},
    {id:2, alId:1, checked:false, name: 'Update Member Details'},
    {id:3, alId:2, checked:false, name: 'Update Bank Details'},
    {id:4, alId:3, checked:false, name: 'Update Education Details'},
    {id:5, alId:4, checked:false, name: 'Update Company Details'},
    {id:6, alId:5, checked:false, name: 'Update Family Dependent Details'},
    {id:7, alId:6, checked:false, name: 'Update Childrens Details'},
    {id:8, alId:0, checked:true, name: 'Declaration'},
  ];

  details:any = 0;
  detailForm!:FormGroup;
  panelOpenState = false;
  isDisabled:boolean = true;

  constructor(public fb:FormBuilder){}

  ngOnInit(){
    this.registrationForm();
  }

  registrationForm(){
    this.detailForm = this.fb.group({
      'member':this.fb.group({
        'firstName':  ['',[Validators.required]],
        'lastName':   ['',[Validators.required]],
        'gender':     ['',[Validators.required]],
        'dob':        ['',[Validators.required]],
        'mobnumb':    ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        'email':      ['',[Validators.required, Validators.email]],
        'selectType': ['',[Validators.required]],
        'typeValue':  ['',[Validators.required]]
      }),
      'updateDetail':this.fb.group({
        'firstName':  ['',[Validators.required]],
        'lastName':   ['',[Validators.required]],
        'dob':        ['',[Validators.required]],
        'email':      ['',[Validators.required]],
      }),
      'updateBanking':this.fb.group({
        'name':       ['',[Validators.required]],
        'newBank':    this.fb.array([])        
      }),
      'declaration':this.fb.group({
        'declare1':   ['',[Validators.required]],
        'declare2':   ['',[Validators.required]],
        'declare3':   ['',[Validators.required]],
        'declare4':   ['',[Validators.required]],
        'declare5':   ['',[Validators.required]],
      })
    })
  }

  onSelection(event:any, id:number, item:any){
    item.checked = !item.checked;
    let count = this.allList.filter((x:any)=>x.checked == true).length;
    let form = this.formList.filter((x:any)=>x.alId == id);
    form[0].checked = item.checked;

    this.details = count >0?true:false;

    let updateDetail = this.formList[1].checked;
    if(updateDetail){
      this.detailForm.controls['updateDetail'].enable();
    }else{
      this.detailForm.controls['updateDetail'].disable();
    }

    // let bankDetail  = this.formList[2].checked;
    // if(bankDetail){
    //   this.detailForm.controls['updateBanking'].enable();
    // }else{
    //   this.detailForm.controls['updateBanking'].disable();
    // }
  }

  updateDetail():FormArray{
    return this.detailForm.get('updateDetail') as FormArray;
  }
  
  newupdateDetail():FormGroup{
    return this.fb.group({
      categoryId:['',[Validators.required]],
      categoryName:['',[Validators.required]]
    })
  }

  addupdateDetail(){
    this.updateDetail().push(this.newupdateDetail());
  }

  removeupdateDetail(catId:number){
    // this.updateDetail().removeA
  }

  ngSubmitDetails(){
    console.log(this.detailForm);
  }


}
