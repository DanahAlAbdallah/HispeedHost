import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ImmigrationData, ImmigrationResponse } from '../classes/Immigration';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ImigrationService } from '../classes/imigration.service';

@Component({
  selector: 'app-imigration',
  templateUrl: './imigration.component.html',
  styleUrls: ['./imigration.component.css']
})
export class ImigrationComponent implements OnInit {

  public imigration:ImmigrationData;

  // passportCountry: string;
    // CurrentResidence: string;
    // holdQualification: boolean;
    // desiredCountry:string;

  public isSomethingEmpty:boolean = false;
  public isFullNameEmpty:boolean = false;
  public isDOBEmpty = false;
  public isEVSEmpty = false;
  public isLTOQEmpty = false;
  public isProfessionEmpty = false;
  public isYearsOfExpEmpty = false;
  public isEducationEmpty = false;
  public isFormSent:boolean = false;
  public isPassportCountryEmpty = false;
  public isCurrentResidence:boolean = false;
  public isholdQualificationEmpty:boolean = false;
  public isDesiredCountryEmpty:boolean = false;
  public isVisaStatusEmpty:boolean = false;
  public isEnglishProfEmpty:boolean = false;
  public isGenderEmpty = false;
  public isDontHaveQualification:boolean = false;

  public response!:any;
  public isShowModal = false;
  public passportCountryCode:any[]=  [];
  public currentResidenceCountries:any[]=  [];

  public isCvSelectedEmpty = false;

  public dateOfBirth: Date = new Date();

  public disablebuttonModal = true;


  selectedFileName: string | null = null;
  selectedFile?: File | null;


  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private service:ImigrationService
    ){
      this.imigration = new ImmigrationData();
          this.router.events.subscribe((event) => {
              if (event instanceof NavigationEnd){
                 //scroll to top
                 window.scrollTo(0,0);
              }
       });
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

 
  public genders = [
    { label: 'Male', value: 'Male', checked: false },
    { label: 'Female', value: 'Female', checked: false },

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
        this.checkEnglishProfIsEmpty();
      }
    });
  }
  
 
  public handleCheckboxChange1(selectedItem: { label: string,value:string, checked: boolean }): void {
    this.items.forEach(item => {
      item.checked = item === selectedItem; // Set the selected property based on the clicked checkbox
      if(item.checked){
        this.imigration.visaStatus = item.value;
        this.checkVisaStatusIsEmpty();
      }
    });
  }
  
   
  public handleCheckboxGenderChange(selectedItem: { label: string,value:string, checked: boolean }): void {
    this.genders.forEach(item => {
      item.checked = item === selectedItem; // Set the selected property based on the clicked checkbox
      if(item.checked){
        this.imigration.gender = item.value;
        this.checkGenderIsEmpty();
      }
    });
  }

  public handleCheckboxChange2(selectedItem: { label: string, checked: boolean }): void {
    this.items2.forEach(item => {
      item.checked = item === selectedItem; // Set the selected property based on the clicked checkbox
      if(item.checked){
        if(item.label == "Yes"){
          this.imigration.holdQualification = true;
          this.isDontHaveQualification = false;
          this.imigration.listTypeOfQualification = ""

        }
        else{

          this.imigration.holdQualification = false;
          this.isDontHaveQualification = true;
          this.isholdQualificationEmpty = false;
          this.imigration.listTypeOfQualification = "No : Dont Have!"

          this.checkLTQIsEmpty();
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
      !this.imigration.englishProficiency||
      !this.imigration.education ||
      !this.imigration.profession ||
      !this.imigration.yearsOfExperience||
      !this.imigration.passportCountry||
      !this.imigration.CurrentResidence||
      !this.imigration.englishProficiency||
      !this.imigration.visaStatus||
      !this.imigration.gender||
      !this.imigration.desiredCountry ||
      !this.imigration.filename) {
      this.isSomethingEmpty = true;
      this.isShowModal = false; 
      return;
  }


  console.log(this.imigration);

  this.isResponseReceived = false;

      this.service.addImigration(this.imigration, this.selectedFile).subscribe({
        next: (v:any) => {
          if(v.data.response != null){
            this.response = v.data.response; 
          }
        },
        error: (e:any) => {
          console.log(e);
          this.response = "Something Wrong! Please Try Again." ;
            this.isResponseReceived = true;

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
    

    
    const elements = ["FullName", "dateofbirth", "explainVisaStatus", "listTypeOfQualification", "passportCountry",
    "CurrentResidence","holdQualification","desiredCountry","gender","filename",
    "visaStatus", "englishProficiency","profession", "yearsOfExperience","education"];
    
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
                case "passportCountry":
                  this.isPassportCountryEmpty = true;
                  break;
                case "CurrentResidence":
                  this.isCurrentResidence = true;
                  break;
                case "holdQualification":
                  if(this.isDontHaveQualification == true){
                    this.isholdQualificationEmpty = false;
                    this.imigration.listTypeOfQualification = "Dont Have!"
                  }else{
                    this.isholdQualificationEmpty = true;

                  }

                  break;
                case "desiredCountry":
                  this.isDesiredCountryEmpty = true;
                  break;
                case "visaStatus":
                  this.isVisaStatusEmpty = true;
                  break;
                case "englishProficiency":
                  this.isEnglishProfEmpty = true;
                  break;

                case "listTypeOfQualification":
                    this.isLTOQEmpty = true;
                    break;
                case "profession":
                  this.isProfessionEmpty = true;
                  break;
                case "yearsOfExperience":
                  this.isYearsOfExpEmpty = true;
                  break;
                case "education":
                  this.isEducationEmpty = true;
                  break;
                  case "gender":
                    this.isGenderEmpty = true;
                    break;
                    case "filename":
                    this.isCvSelectedEmpty = true;
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

    this.buttonDisable();

 }

 public checkExplainIsEmpty(){
  this.isEVSEmpty = this.imigration.explainVisaStatus.trim().length === 0;

  this.buttonDisable();

}

public checkLTQIsEmpty(){
  this.isLTOQEmpty = this.imigration.listTypeOfQualification.trim().length === 0;
  if(this.isDontHaveQualification){
      return;
  }
  this.buttonDisable();

}

public checkProfessionIsEmpty(){
  this.isProfessionEmpty = this.imigration.profession.trim().length === 0;

  this.buttonDisable();

}

public checkYearsOFEIsEmpty(){
  this.isYearsOfExpEmpty = this.imigration.yearsOfExperience.trim().length === 0;

  this.buttonDisable();
}

public checkEducatioIsEmpty(){
  this.isEducationEmpty = this.imigration.education.trim().length === 0;

  this.buttonDisable();

}

public checkPassportCountryIsEmpty(){
  this.isPassportCountryEmpty = this.imigration.passportCountry.trim().length === 0;

  this.buttonDisable();

}


public checkCurrentResidenceIsEmpty(){
  this.isCurrentResidence = this.imigration.CurrentResidence.trim().length === 0;

  this.buttonDisable();

}


public checkVisaStatusIsEmpty(){
  this.isVisaStatusEmpty = this.imigration.visaStatus.trim().length === 0;

  this.buttonDisable();

}

public checkGenderIsEmpty(){
  this.isGenderEmpty = this.imigration.gender.trim().length === 0;

  this.buttonDisable();

}

public checkEnglishProfIsEmpty(){
  this.isEnglishProfEmpty = this.imigration.englishProficiency.trim().length === 0;

  this.buttonDisable();

}

public checkDesiredCountryIsEmpty(){
  this.isDesiredCountryEmpty = this.imigration.desiredCountry.trim().length === 0;

  this.buttonDisable();

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
      this.imigration.listTypeOfQualification.length == 0 ||
      this.imigration.passportCountry.length == 0 ||
      this.imigration.CurrentResidence.length == 0 ||
      this.imigration.englishProficiency.length == 0 ||
      this.imigration.visaStatus.length == 0||
      this.imigration.desiredCountry.length == 0 ||
      this.imigration.gender.length == 0||
      this.imigration.filename.length ==0
       ){
        this.disablebuttonModal = true;
      }
      else{
        this.disablebuttonModal = false;
      }
  }



  @ViewChild('fileInput') fileInput!: ElementRef;

  triggerFileInput() {
    this.fileInput.nativeElement.click(); 
  }


  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
     this.selectedFile = inputElement.files ? inputElement.files[0] : null;
  
    if (this.selectedFile) {
      this.selectedFileName = this.selectedFile.name;
      this.isCvSelectedEmpty = false;
      this.imigration.filename = this.selectedFileName;
    } else {
      this.selectedFileName = null;
      this.isCvSelectedEmpty = true;

    }
  }

}
