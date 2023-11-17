import { Component, OnInit } from '@angular/core';
import { ImmigrationData } from '../classes/Immigration';
import { ImigrationService } from '../classes/imigration.service';
import { FirstRow } from '../shared-components/firstrow/firstrow.component';
import { SecondRow } from '../shared-components/second-row/second-row.component';
import { ThirdRow } from '../shared-components/third-row/third-row.component';
import { FourRowData } from '../shared-components/forth-row/forth-row.component';
import { EmailPhoneClass } from '../form-data-shared/form-data-shared.component';
import { RowFive } from '../shared-components/five-row/five-row.component';
import { RowSix } from '../shared-components/six-row/six-row.component';
import {NavigationEnd, Router} from "@angular/router";
import {ScrollService} from "../classes/scroll.service";

@Component({
  selector: 'app-imigration',
  templateUrl: './imigration.component.html',
  styleUrls: ['./imigration.component.css']
})
export class ImigrationComponent implements OnInit {


  form_row1:FirstRow = new FirstRow();
  form_row2:SecondRow = new SecondRow()
  form_row3:ThirdRow = new ThirdRow()
  form_row4:FourRowData = new FourRowData()
  form_row5:RowFive = new RowFive()
  form_row6:RowSix = new RowSix()
  isSomethingEmpty:boolean = false;
  isChekedFirstTime = false;
  cvFile:File | null = null;
  isEVSOpen:boolean = false;

  emailPhone:EmailPhoneClass = new EmailPhoneClass()

  immigration:ImmigrationData |null = null

  checkBoxTextDesc:string = "Do You Have an Current Offer of Employment to Work in Desired Country?"
  checkBoxTextError:string = "Current Offer of Employment is required.";

  desiredCountries:string[] = [
    'Australia',
    'Canada'
  ]

  public isShowModal = false;
  isResponseReceived: boolean = false;
  response:string = ""

  isHoldQualification:boolean = false;
  isOtherProfessionSelected:boolean = false;


  constructor(private immigration_service:ImigrationService,private router:Router, private scroll_service:ScrollService){
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

  onFourRowChanged(updatedFormFields: FourRowData){
    this.form_row4  = updatedFormFields;
  }

  onCvFileUploaded(file:File){
    this.cvFile = file;
  }

  onEmailPhoneRowChanged(updatedFormFields: EmailPhoneClass){
    this.emailPhone  = updatedFormFields;
  }


  onRowFiveChanged(updatedFormFields: RowFive){
    this.form_row5  = updatedFormFields;
  }

  onRowSixChanged(updatedFormFields: RowSix){
    this.form_row6  = updatedFormFields;
  }

  onHoldQualificationChanged(holdQualification:boolean){
    this.isHoldQualification = holdQualification;
  }


  onEvsOpened(isEVSOpen:boolean){
    this.isEVSOpen = isEVSOpen;
  }

  onOtherProfessionSelected(updatedFormFields: boolean){
    this.isOtherProfessionSelected  = updatedFormFields;
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

        case this.form_row4.desiredCountry:
        this.isSomethingEmpty = true;
        break;

      case this.form_row5.status:
        this.isSomethingEmpty = true;
        break;

      case this.form_row2.file_name:
        this.isSomethingEmpty = true;
        break;

      default:
        this.isSomethingEmpty = false
    }



    if(this.emailPhone.email == '' && this.emailPhone.phoneNumber == ''){
      this.isSomethingEmpty = true;
    }

    if(!this.form_row3.temp ) {
      this.isChekedFirstTime = true;
      return
    }


    if(!this.form_row4.temp) {
      this.isChekedFirstTime = true;
      return
    }


    if((this.form_row5.explain=='' && this.isEVSOpen) || this.isSomethingEmpty){
      this.isSomethingEmpty = true;
      return;
    }

    if((this.form_row6.listTypeOfQualification=='' && this.isHoldQualification) || this.isSomethingEmpty){

      this.isSomethingEmpty = true;
      return;
    }

    if(this.isOtherProfessionSelected == true && this.form_row2.other == ''){
      this.isSomethingEmpty = true;

      return
    }

    if(this.form_row2.profession == "Other" && this.form_row2.other == ''){
      this.isSomethingEmpty = true;
      return;
    }


    if(this.isSomethingNotValid && this.emailPhone.email == '' && this.emailPhone.phoneNumber == ''){

      return;
    }

    if(this.isSomethingNotValid){
      return;
    }

    if(this.isSomethingEmpty){
      return;
    }

    this.immigration = new ImmigrationData(
      0,
      this.form_row1.fullName,
      `${this.form_row1.year}-${this.form_row1.month}-${this.form_row1.day}`,
      this.form_row1.passportCountry,
      this.form_row1.currentResidence,
      this.form_row5.status,
      this.form_row5.explain,
      this.form_row6.holdQualification,
      this.form_row6.listTypeOfQualification,
      this.form_row3.englishProficiency,
      this.form_row3.completeEnglishTest,
      this.form_row4.doYouHaveScholar,
      this.form_row2.profession,
      this.form_row2.yearofexperience,
      this.form_row2.education,
      this.form_row4.desiredCountry,
      this.form_row1.gender,
      'whatever',
      this.emailPhone.phoneNumber,
      this.emailPhone.email,
      this.form_row2.other
    );

    this.isShowModal = true;
    this.immigration_service.addImigration(this.immigration,this.cvFile).subscribe({
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
