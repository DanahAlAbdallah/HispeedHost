import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ImigrationService } from '../classes/imigration.service';
import { TourismService } from '../classes/tourism.service';
import { TourismVisa } from '../classes/tourismvisa';

@Component({
  selector: 'app-torrism-visa',
  templateUrl: './torrism-visa.component.html',
  styleUrls: ['./torrism-visa.component.css']
})
export class TorrismVisaComponent {
  public tourism:TourismVisa;

  public isSomethingEmpty:boolean = false;
  public isFullNameEmpty:boolean = false;
  public isDOBEmpty = false;
  public isEVSEmpty = false;
  public isPassportCountryEmpty = false;
  public isDesiredCountryEmpty = false;
  public isVisaStatusEmpty = false;
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
    private service:TourismService,
    private serviceImmi:ImigrationService
    ){
      this.tourism = new TourismVisa();

  
          this.router.events.subscribe((event) => {
              if (event instanceof NavigationEnd){
                 //scroll to top
                 window.scrollTo(0,0);
              }
       });
      
  }
  ngOnInit(): void {
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


 
 
  public handleCheckboxChange1(selectedItem: { label: string,value:string, checked: boolean }): void {
    this.items.forEach(item => {
      item.checked = item === selectedItem; // Set the selected property based on the clicked checkbox
      if(item.checked){
        this.tourism.visaStatus = item.value;
        this.checkVisaStatusIsEmpty();
      }
    });
  }
  
  
  public isResponseReceived: boolean = false;

  public submit():void{

    this.checkingEmpty();

    console.log(this.tourism);


    if (!this.tourism.fullName ||
      !this.tourism.dateOfBirth ||
      !this.tourism.passportCountry || 
      !this.tourism.explain||
      !this.tourism.visaStatus ||
      !this.tourism.desiredCountry) {
      this.isSomethingEmpty = true;
      this.isShowModal = false; 

      return;
  }


  this.isResponseReceived = false;

      this.service.addTourismVisa(this.tourism).subscribe({
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
    

    const elements = ["fullName", "dateOfBirth", "passportCountry", "visaStatus","explain", "listOfQualification","exam","degree","desiredCountry"];
    
    let isSomethingEmpty = false;
    
    for (const element of elements) {
        const value = nullSafeValue(this.tourism.get(element));
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
            
                case "passportCountry":
                  this.isPassportCountryEmpty = true;

                  break;
               
                case "desiredCountry":
                  this.isDesiredCountryEmpty = true;

                  break;
                case "visaStatus":
                  this.isVisaStatusEmpty = true;

                  break;
            }
        }
    }
    
    return isSomethingEmpty;
  }


  public checkFullNameIsEmpty(){
     this.isFullNameEmpty = this.tourism.fullName.trim().length === 0;
     this.buttonDisable();
  }

  public checkDOBIsEmpty(){
    const year = new Date().getFullYear() - parseInt(this.dateOfBirth.toLocaleString('en-US', { year: 'numeric' }),10);
    this.isDOBEmpty = this.dateOfBirth.toLocaleString().trim().length === 0 || year < 18;
    this.tourism.dateOfBirth = this.dateOfBirth.toLocaleString();

    this.buttonDisable();

 }

 public checkExplainIsEmpty(){
  this.isEVSEmpty = this.tourism.explain.trim().length === 0;

  this.buttonDisable();

}



public checkPassportCountryIsEmpty(){
  this.isPassportCountryEmpty = this.tourism.passportCountry.trim().length === 0;

  this.buttonDisable();
}
public checkVisaStatusIsEmpty(){
  this.isVisaStatusEmpty = this.tourism.visaStatus.trim().length === 0;

  this.buttonDisable();
}

public checkDesiredCountryIsEmpty(){
  this.isDesiredCountryEmpty = this.tourism.desiredCountry.trim().length === 0;

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
    if(this.tourism.fullName.length == 0 || 
      this.tourism.dateOfBirth.length == 0 ||
      this.tourism.explain.length == 0 ||
      this.tourism.desiredCountry.length == 0 ||
      this.tourism.passportCountry.length == 0 ||
      this.tourism.visaStatus.length == 0){
        console.log("wpwpwp")
        this.disablebuttonModal = true;
      }
      else{
        console.log("wpwpwp1")
        this.disablebuttonModal = false;
      }
  }
}
