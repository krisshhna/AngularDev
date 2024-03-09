import { Component, Input, EventEmitter } from '@angular/core';
import { Form, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css'
})
export class MemberDetailComponent {
  form!:FormGroup;
  @Input() formGroupName!:string;

  constructor(public rootFormGroup:FormGroupDirective){}

  ngOnInit(){
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }
}
