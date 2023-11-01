import { Component } from '@angular/core';
import { HomeForm } from '../classes/home_form';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HomeFormService } from '../classes/home-form.service';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent {

  myForm: FormGroup;
  isSubmitting = false;

  msg = "";

  constructor(private fb: FormBuilder,private service:HomeFormService) { 
    this.myForm  = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email:['',Validators.required],
      type:['',Validators.required],
      messages: ['',Validators.required]
    });
  }
  
  form:HomeForm = new HomeForm();

  send(){

    this.form.setFirstName(this.myForm.get('firstName')?.value)
    this.form.setLastName(this.myForm.get('lastName')?.value)
    this.form.setEmailName(this.myForm.get('email')?.value)
    this.form.setTypeName(this.myForm.get('type')?.value)
    this.form.setMessagesName(this.myForm.get('messages')?.value)


    
    if (this.myForm.valid) {
      this.isSubmitting = true;

        this.service.insertForm(this.form).subscribe({
          next:(res:any) => {
            this.isSubmitting= false
            this.myForm.reset()
            this.msg= "Send Successfully"
          },
          error:(err:any) => {
            this.isSubmitting= false
            this.msg= "Send Failed"

          },
          complete:() =>{             this.isSubmitting= false
          }
        })
    }
  }
}
