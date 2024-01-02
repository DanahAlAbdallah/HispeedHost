import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.css']
})
export class ServicesHomeComponent {


  public photos:string[] = [
    './assets/immigration-icon.png',
    './assets/tourism-icon.png',
    './assets/student-icon.png',
    './assets/applyforjobicon.png',
    './assets/findemployee-icon.png'
  ]

  public titles:string[] = [
    'Immigration Program',
    'Tourism Visa',
    'Student Program',
    'Apply For A Job',
    'Find an Employee'
  ]

  public desc:string[] = [
    'Embrace a fresh start abroad with our tailored immigration solutions, expertly guiding you through legalities, paperwork, for a smooth transition.',
    'Explore effortlessly with our comprehensive travel solutions, covering planning, bookings, and more for memorable journeys.',
    'Navigate educational journeys abroad smoothly, from institution selection to application management, achieving academic aspirations.',
    'Unlock your potential, explore career opportunities with us. Join our talent-focused company, browse open roles, and boost your future.',
    'Connect with top talent using our streamlined HR services, boosting business growth through efficient recruitment.'
  ]

  public links:string[] = [
    '/imigration',
    '/tourism',
    '/student',
    '/apply',
    '/search'

  ]

  constructor(private router: Router) {}


}
