import { Component, ElementRef, ViewChild  } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Search } from '../classes/search';
import { AftersearchComponent } from '../aftersearch/aftersearch.component';
import { filter } from 'rxjs';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  @ViewChild('scrollMe') private scrollContainer!: ElementRef;
  

  public search_Data:Search;

  public isMajorEmpty = false;
  public isYearsEmpty = false;
  public isdegressEmpty = false;
  public isGendersEmpty = false;
  public isDataLoad:boolean = false;

  constructor(private router:Router){

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
      //subscribes every changes of your route
      this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd){
             //scroll to top
             window.scrollTo(0,0);
          }
   });
  }

  public majors: string[] = [
    "Graphic Desing",
    "Mechanical Engineer",
    "Accounting",
    "Computer Science",
    "Marketing",
    "Interior Design"
  ]; 

  majorSelected: any = null;

  selectItemMajor(item: any): void {
    this.majorSelected = item;
    this.search_Data.major = this.majorSelected;
    if(this,this.search_Data.major !== ""){
      this.isMajorEmpty = false;
    }
  }
  

  public years: string[] = [
    "1 Year",
    "2 Years",
    "3 Years",
    "4 Years",
    "5 Years",
    "6 Years"
  ]; 

  yearSelected: any = null;

  selectItemYear(item: any): void {
    this.yearSelected = item;
    const temp = this.yearSelected.split(" ");
    this.search_Data.years = temp[0];

    if(this,this.search_Data.years !== ""){
      this.isYearsEmpty = false;
    }
  }


  public degrees: string[] = [
    "Collage",
    "University",
    "Masters",
  ]; 

  degreeSelected: any = null;

  selectItemDegree(item: any): void {
    this.degreeSelected = item;
    this.search_Data.degree = this.degreeSelected;
    if(this,this.search_Data.degree !== ""){
      this.isdegressEmpty = false;
    }
  }

  
  public genders: string[] = [
    "Male",
    "Female"
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
      yearsexp:this.search_Data.years,
      degree:this.search_Data.degree,
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

    const elements = ['major', 'years','degree','gender'];


    let isSomethingEmpty = false;
    
    for (const element of elements) {
        const value = nullSafeValue(this.search_Data.get(element));
        if (value === "EMPTY") {
            switch (element) {
                case "major":
                    this.isMajorEmpty = true;
                    isSomethingEmpty = true;
                    break;
                case "years":
                    this.isYearsEmpty = true;
                    isSomethingEmpty = true;
                    break;
                case "degree":
                    this.isdegressEmpty = true;
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
        window.scrollTo(0, document.documentElement.scrollHeight);
      }
    });          
}


   isDataLoaded(isLoadEmit:boolean){
    this.isDataLoad = isLoadEmit;
    console.log(isLoadEmit)
   }
  
}


