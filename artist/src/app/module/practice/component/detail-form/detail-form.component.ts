import { Component } from '@angular/core';

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

  onSelection(event:any, id:number, item:any){
    item.checked = !item.checked;
    let count = this.allList.filter((x:any)=>x.checked == true).length;
    let form = this.formList.filter((x:any)=>x.alId == id);
    form[0].checked = item.checked;
    this.details = count >0?true:false;
  }
}
