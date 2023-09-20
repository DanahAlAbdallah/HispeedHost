import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-data-shared',
  templateUrl: './form-data-shared.component.html',
  styleUrls: ['./form-data-shared.component.css']
})
export class FormDataSharedComponent {

  @Input() isEmailRequired:boolean = false;
  @Input() isPhoneNumberRequired:boolean = false;

  emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  @ViewChild('emailInput') emailInput: any;

  @Output() emailValue = new EventEmitter<string>();
  @Output() phoneNumberValue = new EventEmitter<string>();

 public isEmailValid = false;

  emailValueKeyUp(event:any){
    const isValidEmail = this.emailPattern.test(event.target.value);
    if(event.target.value != ""){
      if (isValidEmail) {
        this.emailValue.emit(event.target.value);
        this.isEmailValid = false;
  
      } else {
          this.isEmailValid = true;
      }
    }
    else{
      this.isEmailValid = false;

    }
 
    if(this.emailValue !== null || this.emailValue !== "" || (this.phoneNumberValue.length ==0)){
      this.isEmailRequired = false;
      this.isPhoneNumberRequired = false;
    }
  }

  phoneNumberValueKeyUp(event:any){
    this.phoneNumberValue.emit(event.target.value);
    if(this.phoneNumberValue !== null || this.phoneNumberValue !== "" || 
    (this.emailValue.length == 0)){
      this.isEmailRequired = false;
      this.isPhoneNumberRequired = false;
    }
  }

}
