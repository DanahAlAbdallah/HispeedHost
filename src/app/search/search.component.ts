import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Search } from '../classes/search';
import { AftersearchComponent } from '../aftersearch/aftersearch.component';
import { filter } from 'rxjs';
import { ImigrationService } from '../classes/imigration.service';
import {ScrollService} from "../classes/scroll.service";
import { ApplyforjobService } from '../classes/applyforjob.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('scrollMe') private scrollContainer!: ElementRef;


  public search_Data:Search;

  public isMajorEmpty = false;
  public isGendersEmpty = false;
  public isDataLoad:boolean = false;
  nationality:any[] = []

  constructor(private router:Router, 
    private service:ImigrationService ,
              private scroll_service:ScrollService, private apply:ApplyforjobService ){

    this.search_Data = new Search();

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      setTimeout(() => {
        if (this.isDataLoad) {
          this.isDataLoad = false; // Reset the flag after performing the action
        }
      }, 2000);

    });

      this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd){
             //scroll to top
             window.scrollTo(0,0);
          }
   });
  }

  public majors: any[] = [];
  countsFindAll:number = 0;

  ngOnInit(): void {
    this.apply.getProfessionWithCounts().subscribe({
      next: (v:any) => {
       this.majors = v 
      },
      error: (e) => {},
      complete: () =>{}
  });

  this.apply.getGenderWithCounts().subscribe({
    next: (v:any) => {
     this.genders = v 
    },
    error: (e) => {},
    complete: () =>{}
});

  this.apply.getCounts().subscribe({
    next: (v:any) => {
      this.countsFindAll = v.data;
    },
    error: (e) => {},
    complete: () =>{}
  });
  this.getCountries();
  }



  majorSelected: any = null;

  selectItemMajor(item: any): void {
    this.majorSelected = item;
    this.search_Data.major = this.majorSelected;
    if(this,this.search_Data.major !== ""){
      this.isMajorEmpty = false;
    }
  }


  public genders: any[] = [

  ];

  public icons: string[] = [
    "./assets/profession.png",
    "./assets/person-fill.png",
    "./assets/Union.png",
  ];

  genderSelected: any = null;

  selectItemGender(item: any): void {
    this.genderSelected = item;
    this.search_Data.gender = this.genderSelected;
    if(this,this.search_Data.gender !== ""){
      this.isGendersEmpty = false;
    }
  }

  search():void{

    if(this.checkEmpty()){
      return;
    }
    this.router.navigate(['search'] ,{ queryParams: {
      profession:this.search_Data.major,
      gender:this.search_Data.gender,
      nationality: this.search_Data.nationality
    } });

    this.isDataLoad = true;
    this.scrollToBottom()
  }


  private checkEmpty(){

    const nullSafeValue = (value: any) => {
      if (value === null) {
          return "NULL";
      } else if (value === "") {
          return "EMPTY";
      } else {
          return value;
      }
  };

    const elements = ['major'];


    let isSomethingEmpty = false;

    for (const element of elements) {
        const value = nullSafeValue(this.search_Data.get(element));
        if (value === "EMPTY") {
            switch (element) {
                case "major":
                    this.isMajorEmpty = true;
                    isSomethingEmpty = true;
                    break;
            }

        }
    }

    return isSomethingEmpty;
  }

  scrollToBottom(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Scroll to the end of the page
        // window.scrollTo(0, document.documentElement.scrollHeight);
          this.scroll_service.scrollToElement(document.getElementById("after"))
      }
    });
}


   isDataLoaded(isLoadEmit:boolean){
    this.isDataLoad = isLoadEmit;
    console.log(isLoadEmit)
   }

   majorSelectedItemEvent(major:string){
      this.search_Data.major = major;
   }

   genderSelectedItemEvent(gender:string){
      if(gender == 'Both'){
        this.search_Data.gender = "";
      }else{
        this.search_Data.gender = gender;

      }

   }

  nationalitySelected:string = ""

   nationalitySelectedItemEvent(nationality:string){
    if(nationality == "All"){
      this.search_Data.nationality = "";

    }else{
      this.search_Data.nationality = nationality;

    }
   }


   countries:any[] = [];

  public getCountries(){
    this.service.loadCurrentResidenceCountries().subscribe({
        next: (v:any) => {
          this.countries =
           v.filter((c:any) => c.name.common !== 'Israel')
           .sort((a:any, b:any) => a.name.common >= b.name.common ? 1 : -1);

           this.countries = this.countries.map((country:any) => {
            return country.name.common;
           })

           console.log(this.countries)
        },
       
        error: (e) => {console.log(e)},
        complete: () =>{console.log("is complete")}
    });
  }
}


