import { Component, Input } from '@angular/core';
import { AfterSearch } from '../classes/afterseatch';

@Component({
  selector: 'app-aftersearchitem',
  templateUrl: './aftersearchitem.component.html',
  styleUrls: ['./aftersearchitem.component.css']
})
export class AftersearchitemComponent {

  @Input() name:string="";
  @Input() age:number = 0;
  @Input() location:string = "";
  @Input() phonenumber = "";
  @Input() email:string = "";
  @Input() contactlink:string = "mailto:pr.alimrad@outlook.com";
  @Input() resumelink:string = "";
  @Input() isEmpty: boolean = false;
  @Input() profession:string = "";
  @Input() year_of_experience:number = 0;
  @Input() link_image:string = "";

  @Input() education:string = "";
  @Input() passport_country:string = "";

  @Input() gender:string = ""

  @Input() isHRpage: boolean = false;

  constructor(){
  }


}
