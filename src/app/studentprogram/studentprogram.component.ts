import {Component, OnInit} from '@angular/core';
import { Student } from '../classes/student';
import { StudentService } from '../classes/student.service';
import { FirstRow } from '../shared-components/firstrow/firstrow.component';
import { FourRowData } from '../shared-components/forth-row/forth-row.component';
import { RowFive } from '../shared-components/five-row/five-row.component';
import { RowSix } from '../shared-components/six-row/six-row.component';
import { RowSeven } from '../shared-components/row-seven/row-seven.component';
import { EmailPhoneClass } from '../form-data-shared/form-data-shared.component';
import {NavigationEnd, Router} from "@angular/router";
import {ScrollService} from "../classes/scroll.service";

@Component({
  selector: 'app-studentprogram',
  templateUrl: './studentprogram.component.html',
  styleUrls: ['./studentprogram.component.css']
})
export class StudentprogramComponent implements OnInit{
  form_row1:FirstRow = new FirstRow();
  form_row4:FourRowData = new FourRowData()
  form_row5:RowFive = new RowFive()
  form_row6:RowSix = new RowSix()
  form_row7:RowSeven = new RowSeven()
  emailPhone:EmailPhoneClass = new EmailPhoneClass()

  isSomethingEmpty:boolean = false;
  isChekedFirstTime = false;

  isEVSOpen:boolean = false;
  student:Student | null = null

  public isShowModal = false;
  isResponseReceived: boolean = false;
  response:string = ""

  checkBoxTextDesc :string = "Do You Have a Scholarship to the Desired Country?";
  checkBoxTextError :string = "Completed a English Test is required.";

  certificate_file:File | null= null;

  desiredCountries:string[] = [
    'Australia',
    'Canada',
    'Russia',
    'France',
    'Italy',
    'Belarus',
    'Purtural',
    'Belgium'
  ]

  constructor(private student_service:StudentService,private router:Router){

  }

  ngOnInit(): void {
  }

  onFirstRowChanged(updatedFormFields: FirstRow) {
    this.form_row1 = updatedFormFields;
  }

  onFourRowChanged(updatedFormFields: FourRowData){
    this.form_row4  = updatedFormFields;
  }


  onRowFiveChanged(updatedFormFields: RowFive){
    this.form_row5  = updatedFormFields;
  }

  onSevenRowChanged(updatedFormFields: RowSeven){
    this.form_row7  = updatedFormFields;
  }

  onEvsOpened(isEVSOpen:boolean){
    this.isEVSOpen = isEVSOpen;
  }

  onEmailPhoneRowChanged(updatedFormFields: EmailPhoneClass){
    this.emailPhone  = updatedFormFields;
  }

  onFileUpload(file:File){
    this.certificate_file = file;
  }

  isSomethingNotValid:boolean = false;

    onFormValidityChanged(isValid: boolean) {

      if (!isValid) {
        this.isSomethingNotValid = true;
      }else{
        this.isSomethingNotValid = false;
      }
    }

  submit(){
    switch(""){
      case this.form_row1.fullName:
        this.isSomethingEmpty = true;
        break;
      case this.form_row1.day:
        this.isSomethingEmpty = true;
        break;
      case this.form_row1.month:
        this.isSomethingEmpty = true;
        break;

      case this.form_row1.year:
        this.isSomethingEmpty = true;
        break;

      case this.form_row1.currentResidence:
        this.isSomethingEmpty = true;
        break;
      case this.form_row1.passportCountry:
        this.isSomethingEmpty = true;
        break;


      case this.form_row4.desiredCountry:
        this.isSomethingEmpty = true;
        break;

      case this.form_row5.status:
        this.isSomethingEmpty = true;
        break;

      case this.form_row7.exam:
        this.isSomethingEmpty = true;
        break;
      case this.form_row7.degree:
        this.isSomethingEmpty = true;
        break;
      case this.emailPhone.email:
        this.isSomethingEmpty = true;
        break;
      case this.emailPhone.phoneNumber:
        this.isSomethingEmpty = true;
        break;
      default:
        this.isSomethingEmpty = false
    }

    if(!this.form_row4.temp ) {
      this.isChekedFirstTime = true;
      return
    }


    if((this.form_row5.explain=='' && this.isEVSOpen) || this.isSomethingEmpty){
      this.isSomethingEmpty = true;
      return;
    }


    if(this.isSomethingNotValid){
      return;
    }


    if(this.isSomethingNotValid){
      return;
    }


    this.student = new Student(
      0,
      this.form_row1.fullName,
      `${this.form_row1.year}-${this.form_row1.month}-${this.form_row1.day}`,
      this.form_row1.passportCountry,
      this.form_row1.currentResidence,
      this.form_row5.status,
      this.form_row5.explain,
      this.form_row7.exam,
      this.form_row7.degree,
      this.form_row4.desiredCountry,
      this.form_row4.doYouHaveScholar,
      this.emailPhone.phoneNumber,
      this.emailPhone.email,
      this.form_row1.gender
    );

    this.isShowModal = true;
    this.student_service.addStudent(this.student, this.certificate_file).subscribe({
      next:(res:any) => {
        this.response = "Form sent successfully";
        this.isResponseReceived = true;
      },
      error:(err:any) => {
        this.response = "Something Wrong";
        this.isResponseReceived = true;
      },
      complete:()=>{}
    });
  }
}
