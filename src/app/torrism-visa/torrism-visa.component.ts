import {Component, OnInit} from '@angular/core';
import { TourismService } from '../classes/tourism.service';
import { TourismVisa } from '../classes/tourismvisa';
import { FirstRow } from '../shared-components/firstrow/firstrow.component';
import { FourRowData } from '../shared-components/forth-row/forth-row.component';
import { RowFive } from '../shared-components/five-row/five-row.component';
import { EmailPhoneClass } from '../form-data-shared/form-data-shared.component';
import {ImigrationService} from "../classes/imigration.service";
import {NavigationEnd, Router} from "@angular/router";
import {ScrollService} from "../classes/scroll.service";

@Component({
  selector: 'app-torrism-visa',
  templateUrl: './torrism-visa.component.html',
  styleUrls: ['./torrism-visa.component.css']
})
export class TorrismVisaComponent implements OnInit{
  form_row1:FirstRow = new FirstRow();
  form_row4:FourRowData = new FourRowData()
  form_row5:RowFive = new RowFive()
  isSomethingEmpty:boolean = false;
  emailPhone:EmailPhoneClass = new EmailPhoneClass()

  isEVSOpen:boolean = false;
  tourism:TourismVisa |null = null

  public isShowModal = false;
  isResponseReceived: boolean = false;
  response:string = ""

  desiredCountries:string[] = []
  constructor(private tourism_service:TourismService, private service:ImigrationService, private router: Router, ){
  }

  ngOnInit(): void {
     this.getCountries();
  }

  isValidPrefix:boolean = false;
  onValidPrefix(prefix:boolean){
    this.isValidPrefix = prefix;
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

  onEvsChanged(isEVSOpen:boolean){
    this.isEVSOpen = isEVSOpen;
  }

  onEmailPhoneRowChanged(updatedFormFields: EmailPhoneClass){
    this.emailPhone  = updatedFormFields;
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

      case this.emailPhone.email:
        this.isSomethingEmpty = true;
        break;
      case this.emailPhone.phoneNumber:
        this.isSomethingEmpty = true;
        break;
      default:
        this.isSomethingEmpty = false
    }


    if((this.form_row5.explain=='' && this.isEVSOpen) || this.isSomethingEmpty){
      this.isSomethingEmpty = true;
      return;
    }


    if(this.isSomethingNotValid ){
      return;
    }

    if(this.isSomethingNotValid){
      return;
    }

    if(this.isValidPrefix){
        return;
    }

    this.tourism = new TourismVisa(
      0,
      this.form_row1.fullName,
      `${this.form_row1.year}-${this.form_row1.month}-${this.form_row1.day}`,
      this.form_row1.passportCountry,
      this.form_row1.currentResidence,
      this.form_row5.status,
      this.form_row5.explain,
      this.form_row4.desiredCountry,
      this.emailPhone.phoneNumber,
      this.emailPhone.email,
      this.form_row1.gender,

    );

    this.isShowModal = true;
    this.tourism_service.addTourismVisa(this.tourism).subscribe({
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

  public getCountries(){
    this.service.loadCurrentResidenceCountries().subscribe({
      next: (v:any) => {
        v.forEach((b:any) => this.desiredCountries.push(b.name.common));
        this.desiredCountries = this.desiredCountries.filter((c:any) => c !== 'Israel')
           .sort((a:any, b:any) => a >= b ? 1 : -1);
      },
      error: (e) => {console.log(e)},
      complete: () =>{console.log("is complete")}
    });
  }
}
