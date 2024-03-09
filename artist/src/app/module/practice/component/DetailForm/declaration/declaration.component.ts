import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrl: './declaration.component.css'
})
export class DeclarationComponent {
  form!:FormGroup;
  @Input() formGroupName!:string;

  constructor(public rootFormGroup:FormGroupDirective){}

  ngOnInit(){
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }
}
