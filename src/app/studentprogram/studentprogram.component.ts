import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ImigrationService } from '../classes/imigration.service';
import { ImmigrationData } from '../classes/Immigration';
import { Student } from '../classes/student';
import { StudentService } from '../classes/student.service';

@Component({
  selector: 'app-studentprogram',
  templateUrl: './studentprogram.component.html',
  styleUrls: ['./studentprogram.component.css']
})
export class StudentprogramComponent {
  public student:Student;

  public isSomethingEmpty:boolean = false;
  public isFullNameEmpty:boolean = false;
  public isDOBEmpty = false;
  public isEVSEmpty = false;
  public isLTOQEmpty = false;
  public isPassportCountryEmpty = false;
  public isCurrentResidenceEmpty = false;
  public isVisaStatusEmpty = false;
  public isExamEmpty = false;
  public isDegreeEmpty = false;
  public isDesiredCountryEmpty = false;

  public isFormSent:boolean = false;
  public response!:any;
  public isShowModal = false;
  public passportCountryCode:any[]=  [];
  public currentResidenceCountries:any[]=  [];

  public dateOfBirth: Date = new Date();

  public disablebuttonModal = true;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private service:StudentService,
    private serviceImmi:ImigrationService
    ){
      this.student = new Student();


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

  public exams = [
    { label: 'IELTS', value: 'IELTS', checked: false },
    { label: 'TOEFL', value: 'TOEFL', checked: false },
    { label: 'TOEIC ', value: 'TOEIC ', checked: false },
    { label: 'CLEPIP', value: 'CLEPIP', checked: false }
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

  public handleCheckboxChangeExam(selectedItem: { label: string, value:string,checked: boolean }): void {
    this.exams.forEach(exam => {
      exam.checked = exam === selectedItem; 
      if(exam.checked){
        this.student.exam = exam.label;
        this.checkExamIsEmpty();
      }
    });
  }


  
 
  public handleCheckboxChange1(selectedItem: { label: string,value:string, checked: boolean }): void {
    this.items.forEach(item => {
      item.checked = item === selectedItem; // Set the selected property based on the clicked checkbox
      if(item.checked){
        this.student.visaStatus = item.value;
        this.checkVisaStatusIsEmpty();
      }
    });
  }
  


  public handleCheckboxChange4(selectedItem: { label: string, checked: boolean }): void {
    this.items22.forEach(item => {
      item.checked = item === selectedItem; // Set the selected property based on the clicked checkbox
      if(item.checked){
        if(item.label == "Yes"){
          this.student.doYouhaveScholarship = true;
        }
        else{
          this.student.doYouhaveScholarship = false;
        }
      }
    });
  }
  
  isResponseReceived: boolean = false;

  public submit():void{

    this.checkingEmpty();


    if (!this.student.fullName ||
      !this.student.dateOfBirth ||
      !this.student.exam ||
      !this.student.listOfQualification ||
      !this.student.currentResidence||
      !this.student.passportCountry || 
      !this.student.listOfQualification ||
      !this.student.explain||
      !this.student.degree) {
      this.isSomethingEmpty = true;
      this.isShowModal = false; 
      return;
  }


  console.log(this.student);

  this.isResponseReceived = false;

      this.service.addStudent(this.student).subscribe({
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
    

    const elements = ["fullName", "dateOfBirth", "passportCountry", "currentResidence", "visaStatus","explain", "listOfQualification","exam","degree","desiredCountry"];
    
    let isSomethingEmpty = false;
    
    for (const element of elements) {
        const value = nullSafeValue(this.student.get(element));
        if (value === "EMPTY") {
            switch (element) {
                case "fullName":
                    this.isFullNameEmpty = true;

                    break;
                case "dateOfBirth":
                    this.isDOBEmpty = true;

                    break;
                case "explain":
                    this.isEVSEmpty = true;

                    break;
                case "listOfQualification":
                    this.isLTOQEmpty = true;

                    break;
                case "passportCountry":
                  this.isPassportCountryEmpty = true;

                  break;
                case "currentResidence":
                  this.isCurrentResidenceEmpty = true;

                  break;
                case "visaStatus":
                  this.isVisaStatusEmpty = true;

                  break;
                case "exam":
                  this.isExamEmpty = true;

                  break;
                case "degree":
                  this.isDegreeEmpty = true;

                  break;
                case "desiredCountry":
                  this.isDesiredCountryEmpty = true;

                  break;
            }
        }
    }
    
    return isSomethingEmpty;
  }


  public checkFullNameIsEmpty(){
     this.isFullNameEmpty = this.student.fullName.trim().length === 0;
     this.buttonDisable();
  }

  public checkDOBIsEmpty(){
    const year = new Date().getFullYear() - parseInt(this.dateOfBirth.toLocaleString('en-US', { year: 'numeric' }),10);
    this.isDOBEmpty = this.dateOfBirth.toLocaleString().trim().length === 0 || year < 18;
    this.student.dateOfBirth = this.dateOfBirth.toLocaleString();

    this.buttonDisable();

 }

 public checkExplainIsEmpty(){
  this.isEVSEmpty = this.student.explain.trim().length === 0;

  this.buttonDisable();

}

public checkLTQIsEmpty(){
  this.isLTOQEmpty = this.student.listOfQualification.trim().length === 0;

  this.buttonDisable();

}

public checkCurrentResidenceIsEmpty(){
  this.isCurrentResidenceEmpty = this.student.currentResidence.trim().length === 0;

  this.buttonDisable();

}

public checkDegreeIsEmpty(){
  this.isDegreeEmpty = this.student.degree.trim().length === 0;

  this.buttonDisable();
}

public checkExamIsEmpty(){
  this.isExamEmpty = this.student.exam.trim().length === 0;

  this.buttonDisable();
}

public checkPassportCountryIsEmpty(){
  this.isPassportCountryEmpty = this.student.passportCountry.trim().length === 0;

  this.buttonDisable();
}
public checkVisaStatusIsEmpty(){
  this.isVisaStatusEmpty = this.student.visaStatus.trim().length === 0;

  this.buttonDisable();
}

public checkDesiredCountryIsEmpty(){
  this.isDesiredCountryEmpty = this.student.desiredCountry.trim().length === 0;

  this.buttonDisable();
}

  public getCurrentResidenceCountries(){
    this.serviceImmi.loadCurrentResidenceCountries().subscribe({
        next: (v:any) => {this.currentResidenceCountries = v; this.passportCountryCode =v;},
        error: (e) => {console.log(e)},
        complete: () =>{console.log("is complete")}
    });
  }

  public buttonDisable(){
    if(this.student.fullName.length == 0 || 
      this.student.dateOfBirth.length == 0 ||
      this.student.explain.length == 0 ||
      this.student.listOfQualification.length == 0 ||
      this.student.exam.length == 0 ||
      this.student.degree.length == 0 ||
      this.student.desiredCountry.length == 0 ||
      this.student.passportCountry.length == 0 ||
      this.student.currentResidence.length == 0 ||
      this.student.visaStatus.length == 0){
        this.disablebuttonModal = true;
      }
      else{
        this.disablebuttonModal = false;
      }
  }
}
