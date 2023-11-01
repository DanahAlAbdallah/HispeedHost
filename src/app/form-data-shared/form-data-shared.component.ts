import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data-shared',
  templateUrl: './form-data-shared.component.html',
  styleUrls: ['./form-data-shared.component.css']
})
export class FormDataSharedComponent {

  myForm: FormGroup;

  @Input() formFields?: EmailPhoneClass;
 
  @ViewChild('emailInput') emailInput: any;

  @Output() emailphoneData = new EventEmitter<EmailPhoneClass>();
  @Input() isSomethingEmpty:boolean = false
  @Output() formValidityChanged = new EventEmitter<boolean>();

 constructor(private fb: UntypedFormBuilder) { 
  this.myForm  = this.fb.group({
    // email: ['',[Validators.required,Validators.email]],
    // phoneNumber: ['',[Validators.required, Validators.minLength(7)]],
     email: [''],
     phoneNumber: ['']
  });

  const customValidator = (control: AbstractControl) => {
    if (control.value) {
      if (control === this.myForm.get('email') && this.myForm.get('email')?.value != '') {
        return Validators.email(control);
      }
      if (control === this.myForm.get('phoneNumber') && this.myForm.get('phoneNumber')?.value != '') {
        return Validators.minLength(7)(control);
      }
    }
    return null;
  };

  const customValidatorRequired = (control: AbstractControl) => {
    if (control.value) {
      if (control === this.myForm.get('email') 
      && this.myForm.get('email')?.value == ''
      && this.myForm.get('phoneNumber')?.value == '') {
        return Validators.required(control);
      }
      if (control === this.myForm.get('phoneNumber') 
      && this.myForm.get('phoneNumber')?.value == ''
      && this.myForm.get('email')?.value == '') {
        return Validators.required(control);
      }
    }
    return null;
  };

  this.myForm.get('email')?.setValidators([customValidatorRequired, customValidator]);
this.myForm.get('phoneNumber')?.setValidators([customValidatorRequired, customValidator]);

  this.myForm.statusChanges.subscribe((status) => {
    if (status === 'INVALID') {
      this.formValidityChanged.emit(false);
    }
    else{
      this.formValidityChanged.emit(true);
    }
  });
}


onFieldChange(fieldName: string, value: string) {
  // if(this.myForm.invalid){
  //   this.formFields!.isValidForm = false;
  //   console.log("invalid")

  // }
  // else{
  //   this.formFields!.isValidForm = true;
  //   console.log("valid")

  // }
  this.formFields![fieldName] = value
  this.emailphoneData.emit(this.formFields);
}
}


export class EmailPhoneClass{
  email:string = '';
  phoneNumber:string = '';
  isValidForm:boolean = false;

  [key: string]: string | undefined|boolean;

}