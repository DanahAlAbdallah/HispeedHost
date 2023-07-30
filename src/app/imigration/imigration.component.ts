import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ImmigrationData, ImmigrationResponse } from '../classes/Immigration';
import { ActivatedRoute, Router } from '@angular/router';
import { ImigrationService } from '../classes/imigration.service';

@Component({
  selector: 'app-imigration',
  templateUrl: './imigration.component.html',
  styleUrls: ['./imigration.component.css']
})
export class ImigrationComponent implements OnInit {

  public imigration:ImmigrationData;

  public isSomethingEmpty:boolean = false;
  public isFullNameEmpty:boolean = false;
  public isDOBEmpty = false;
  public isEVSEmpty = false;
  public isLTOQEmpty = false;
  public isFormSent:boolean = false;
  public response!:ImmigrationResponse;
  public isShowModal = false;
  public passportCountryCode:any[]=  [];
  public currentResidenceCountries:any[]=  [];

  public dateOfBirth: Date = new Date();

  public disablebuttonModal = true;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private service:ImigrationService
    ){
      this.imigration = new ImmigrationData();
  }
  ngOnInit(): void {
    //this.getPassportCountryCode();
    this.getCurrentResidenceCountries();

    this.buttonDisable();
  }

  public items = [
    { label: 'Work', value: 'Work', checked: false },
    { label: 'Permanent Resident', value: 'Permanent Resident', checked: false },
    { label: 'Student', value: 'Student', checked: false },
    { label: 'Temporary Resident', value: 'Temporary Resident', checked: false },
    { label: 'Other', value: 'Other', checked: false },

  ];

  public items2: { label: string, checked: boolean }[] = [
    { label: 'Yes', checked: false },
    { label: 'No', checked: false },
    // Add more items as needed
  ];

  public items21: { label: string, checked: boolean }[] = [
    { label: 'Yes', checked: false },
    { label: 'No', checked: false },
    // Add more items as needed
  ];

  public items22: { label: string, checked: boolean }[] = [
    { label: 'Yes', checked: false },
    { label: 'No', checked: false },
    // Add more items as needed
  ];
  
  public items3: { label: string, checked: boolean }[] = [
    { label: 'excellent', checked: false },
    { label: 'Very good', checked: false },
    { label: 'Good', checked: false },
    { label: 'Moderate', checked: false },
    { label: 'Low', checked: false },
    { label: 'Very low', checked: false }
  ];


  public handleCheckboxChange(selectedItem: { label: string, checked: boolean }): void {
    this.items3.forEach(item => {
      item.checked = item === selectedItem; // Set the selected property based on the clicked checkbox
      if(item.checked){
        this.imigration.englishProficiency = item.label;
      }
    });
  }
  
 
  public handleCheckboxChange1(selectedItem: { label: string,value:string, checked: boolean }): void {
    this.items.forEach(item => {
      item.checked = item === selectedItem; // Set the selected property based on the clicked checkbox
      if(item.checked){
        this.imigration.visaStatus = item.value;
      }
    });
  }
  

  public handleCheckboxChange2(selectedItem: { label: string, checked: boolean }): void {
    this.items2.forEach(item => {
      item.checked = item === selectedItem; // Set the selected property based on the clicked checkbox
      if(item.checked){
        if(item.label == "Yes"){
          this.imigration.holdQualification = true;
        }
        else{
          this.imigration.holdQualification = false;
        }
      }
    });
  }


  public handleCheckboxChange3(selectedItem: { label: string, checked: boolean }): void {
    this.items21.forEach(item => {
      item.checked = item === selectedItem; // Set the selected property based on the clicked checkbox
      if(item.checked){
        if(item.label == "Yes"){
          this.imigration.isCompleteEngishTest = true;
          console.log(this.imigration.isCompleteEngishTest)
        }
        else{
          this.imigration.isCompleteEngishTest = false;
          console.log(item.label)

        }
      }
    });
  }

  public handleCheckboxChange4(selectedItem: { label: string, checked: boolean }): void {
    this.items22.forEach(item => {
      item.checked = item === selectedItem; // Set the selected property based on the clicked checkbox
      if(item.checked){
        if(item.label == "Yes"){
          this.imigration.doYouHaveOffer = true;
        }
        else{
          this.imigration.doYouHaveOffer = false;
        }
      }
    });
  }
  
  isResponseReceived: boolean = false;

  public submit():void{

    this.checkingEmpty();


    if (!this.imigration.FullName ||
      !this.imigration.dateofbirth ||
      !this.imigration.explainVisaStatus ||
      !this.imigration.listTypeOfQualification ||
      !this.imigration.visaStatus||
      !this.imigration.englishProficiency) {
      this.isSomethingEmpty = true;
      this.isShowModal = false; 
      return;
  }


  console.log(this.imigration);

  this.isResponseReceived = false;

      this.service.addImigration(this.imigration).subscribe({
        next: (v:any) => {this.response = v; console.log(v)},
        error: (e) => {
            this.response.response = e.error;
            console.log(e.error)
        },
        complete: () =>{
          this.isResponseReceived = true;
        } 
      });

  }


  public reset():void{
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['./'], {
      relativeTo: this.route,
      queryParamsHandling: "merge"
    })
  }

  private checkingEmpty(){
      const nullSafeValue = (value: any) => {
        if (value === null) {
            return "NULL";
        } else if (value === "") {
            return "EMPTY";
        } else {
            return value;
        }
    };
    
    const elements = ["FullName", "dateofbirth", "explainVisaStatus", "listTypeOfQualification", "visaStatus", "englishProficiency"];
    
    let isSomethingEmpty = false;
    
    for (const element of elements) {
        const value = nullSafeValue(this.imigration.get(element));
        if (value === "EMPTY") {
            switch (element) {
                case "FullName":
                    this.isFullNameEmpty = true;
                    break;
                case "dateofbirth":
                    this.isDOBEmpty = true;
                    break;
                case "explainVisaStatus":
                    this.isEVSEmpty = true;
                    break;
                case "listTypeOfQualification":
                    this.isLTOQEmpty = true;
                    break;
            }
        }
    }
    
    return isSomethingEmpty;
  }


  public checkFullNameIsEmpty(){
     this.isFullNameEmpty = this.imigration.FullName.trim().length === 0;
     this.buttonDisable();
  }

  public checkDOBIsEmpty(){
    const year = new Date().getFullYear() - parseInt(this.dateOfBirth.toLocaleString('en-US', { year: 'numeric' }),10);
    this.isDOBEmpty = this.dateOfBirth.toLocaleString().trim().length === 0 || year < 18;
    this.imigration.dateofbirth = this.dateOfBirth.toLocaleString();
    console.log(this.imigration.dateofbirth);

    this.buttonDisable();

 }

 public checkExplainIsEmpty(){
  this.isEVSEmpty = this.imigration.explainVisaStatus.trim().length === 0;

  this.buttonDisable();

}

public checkLTQIsEmpty(){
  this.isLTOQEmpty = this.imigration.listTypeOfQualification.trim().length === 0;

  this.buttonDisable();

  console.log(this.disablebuttonModal);
}

  // public getPassportCountryCode(){
  //   this.service.loadPassportCountryCode().subscribe({
  //       next: (v:any) => {this.passportCountryCode = v.countries;},
  //       error: (e) => {console.log(e)},
  //       complete: () =>{console.log("is complete")}
  //   });
  // }

  public getCurrentResidenceCountries(){
    this.service.loadCurrentResidenceCountries().subscribe({
        next: (v:any) => {this.currentResidenceCountries = v; this.passportCountryCode =v;},
        error: (e) => {console.log(e)},
        complete: () =>{console.log("is complete")}
    });
  }

  public buttonDisable(){
    if(this.imigration.FullName.length == 0 || 
      this.imigration.dateofbirth.length == 0 ||
      this.imigration.explainVisaStatus.length == 0 ||
      this.imigration.listTypeOfQualification.length == 0){
        this.disablebuttonModal = true;
      }
      else{
        this.disablebuttonModal = false;
      }
  }
}
