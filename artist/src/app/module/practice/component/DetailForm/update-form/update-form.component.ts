import { Component, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent {
  formUpdate!:FormGroup;
  @Input() formGroupName!:string;

  constructor(public rootForm:FormGroupDirective){}
  
  ngOnInit(){
    this.formUpdate    =  this.rootForm.control.get(this.formGroupName) as FormGroup;
  }
}
