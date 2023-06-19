import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  constructor( private router:Router ){}
  ngOnInit(): void {
    //  this.router.navigate(['/test']);
  }
  
  public items:string[] =['Work', 'Permanent Resident', 'Student','Temporary Resident','Other']

  public items2:string[] = ['Yes', 'No'];

  public items3:string[] = ['excellent','Very good','Good', 'Moderate','Low','Very low'];
}