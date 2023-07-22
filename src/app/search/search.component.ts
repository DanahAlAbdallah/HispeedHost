import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  constructor(private router:Router){}

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
    console.log(this.majorSelected);
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
    console.log(this.yearSelected);
  }


  public degrees: string[] = [
    "Collage",
    "University",
    "Masters",
  ]; 

  degreeSelected: any = null;

  selectItemDegree(item: any): void {
    this.degreeSelected = item;
    console.log(this.degreeSelected);
  }

  
  public genders: string[] = [
    "Male",
    "Female"
  ]; 

  genderSelected: any = null;

  selectItemGender(item: any): void {
    this.genderSelected = item;
    console.log(this.genderSelected);
  }

  search():void{
    this.router.navigate(['aftersearch']);
  }
}
