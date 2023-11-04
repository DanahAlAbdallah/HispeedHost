import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Search } from '../classes/search';
import { AftersearchComponent } from '../aftersearch/aftersearch.component';
import { filter } from 'rxjs';
import { ImigrationService } from '../classes/imigration.service';
import {ScrollService} from "../classes/scroll.service";

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

  constructor(private router:Router, private service:ImigrationService ,
              private scroll_service:ScrollService ){

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

  public majors: string[] = [];

  ngOnInit(): void {
    this.service.getAllProfessions().subscribe({
      next: (v:any) => {
        v.forEach((profession:any) => {
          this.majors.push(profession.name);
        });

      },
      error: (e) => {},
      complete: () =>{}
  });
  }



  majorSelected: any = null;

  selectItemMajor(item: any): void {
    this.majorSelected = item;
    this.search_Data.major = this.majorSelected;
    if(this,this.search_Data.major !== ""){
      this.isMajorEmpty = false;
    }
  }


  public genders: string[] = [
    "Male",
    "Female"
  ];

  public icons: string[] = [
    "./assets/profession.png",
    "./assets/person-fill.png"
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
      gender:this.search_Data.gender
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

    const elements = ['major','gender'];


    let isSomethingEmpty = false;

    for (const element of elements) {
        const value = nullSafeValue(this.search_Data.get(element));
        if (value === "EMPTY") {
            switch (element) {
                case "major":
                    this.isMajorEmpty = true;
                    isSomethingEmpty = true;
                    break;
                case "gender":
                  this.isGendersEmpty = true;
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
          this.scroll_service.scrollToElement(document.getElementById("after")
        )
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
      this.search_Data.gender = gender;

   }
}


