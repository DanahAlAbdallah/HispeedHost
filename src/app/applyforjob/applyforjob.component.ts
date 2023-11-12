import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { FirstRow } from '../shared-components/firstrow/firstrow.component';
import { ApplyForJob } from '../classes/applyforjob';
import { SecondRow } from '../shared-components/second-row/second-row.component';
import { ThirdRow } from '../shared-components/third-row/third-row.component';
import { FourRowData } from '../shared-components/forth-row/forth-row.component';
import { ApplyforjobService } from '../classes/applyforjob.service';
import { EmailPhoneClass } from '../form-data-shared/form-data-shared.component';
import { NavigationEnd, Router } from '@angular/router';
import {ScrollService} from "../classes/scroll.service";

@Component({
  selector: 'app-applyforjob',
  templateUrl: './applyforjob.component.html',
  styleUrls: ['./applyforjob.component.css']
})
export class ApplyforjobComponent implements OnInit{

    form_row1:FirstRow = new FirstRow();
    form_row2:SecondRow = new SecondRow()
    form_row3:ThirdRow = new ThirdRow()
    // form_row4:FourRowData = new FourRowData()
    isSomethingEmpty:boolean = false;
    isChekedFirstTime = false;
    cvFile:File | null = null;
    imageUpload: File | null = null;
  emailPhone:EmailPhoneClass = new EmailPhoneClass()
  imageUploadFileName:string = ""


    isOtherProfessionSelected:boolean = false;

    apply:ApplyForJob |null = null

    public isShowModal = false;
    isResponseReceived: boolean = false;
    response:string = ""

    desiredCountries:string[] = [
      'Australia',
      'Canada'
    ]

  constructor(private apply_service:ApplyforjobService, private scroll_service:ScrollService){


  }

  ngOnInit(): void {

  }

    onFirstRowChanged(updatedFormFields: FirstRow) {
      this.form_row1 = updatedFormFields;
    }

    onSecondRowChanged(updatedFormFields: SecondRow){
      this.form_row2  = updatedFormFields;
    }

    onThirdRowChanged(updatedFormFields: ThirdRow){
      this.form_row3  = updatedFormFields;
    }

    // onFourRowChanged(updatedFormFields: FourRowData){
    //   this.form_row4  = updatedFormFields;
    // }

    onCvFileUploaded(file:File){
      this.cvFile = file;
    }

  onImageUpload(file:File){
    this.imageUpload = file;
    this.imageUploadFileName = file.name;
  }

    onEmailPhoneRowChanged(updatedFormFields: EmailPhoneClass){
      this.emailPhone  = updatedFormFields;
    }

    onOtherProfessionSelected(updatedFormFields: boolean){
      this.isOtherProfessionSelected  = updatedFormFields;
    }

    isSomethingNotValid:boolean = false;
  isFileNotSupportedImage: boolean= false;

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

        case this.form_row1.gender:
          this.isSomethingEmpty = true;
          break;

        case this.form_row2.education:
          this.isSomethingEmpty = true;
          break;
        case this.form_row2.profession:
          this.isSomethingEmpty = true;
          break;
        case this.form_row2.yearofexperience:
          this.isSomethingEmpty = true;
          break;

        case this.form_row3.englishProficiency:
          this.isSomethingEmpty = true;
          break;

        // case this.form_row4.desiredCountry:
        //   this.isSomethingEmpty = true;
        //   break;

        case this.form_row2.file_name:
          this.isSomethingEmpty = true;
          break;

        case this.imageUploadFileName:
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

      if( this.isSomethingEmpty ) {
        return;
      }

      if(this.isOtherProfessionSelected == true && this.form_row2.other == ''){
        return
      }

      if(this.isSomethingNotValid ){
        return;
      }

      if(this.isSomethingNotValid){
        return;
      }

      if(this.form_row2.profession == "Other" && this.form_row2.other != ''){
        this.form_row2.profession = this.form_row2.other;
      }

      this.apply = new ApplyForJob(
        this.form_row1.fullName,
        `${this.form_row1.year}-${this.form_row1.month}-${this.form_row1.day}`,
        this.form_row1.passportCountry,
        this.form_row1.currentResidence,
        this.form_row3.englishProficiency,
        false,
        this.form_row2.profession,
        this.form_row2.yearofexperience,
        this.form_row2.education,
        "anything",
        this.form_row1.gender,
        'whatever',
        this.emailPhone.phoneNumber,
        this.emailPhone.email,
        ""
      );


      this.isShowModal = true;

      if(this.imageUpload != null){
        this.apply_service.insertApplyWithImage(this.apply,this.cvFile, this.imageUpload).subscribe({
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
      }else {
        this.apply_service.insertApply(this.apply,this.cvFile).subscribe({
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

  onFileNotSupported($event: boolean) {
    this.isFileNotSupportedImage = $event;
  }
}
