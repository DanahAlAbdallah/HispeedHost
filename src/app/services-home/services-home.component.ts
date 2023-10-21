import { Component } from '@angular/core';

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
    './assets/findemployee-icon.png'
  ]

  public titles:string[] = [
    'Flight Booking',
    'Tourism Visa',
    'Student Program',
    'Find an Employee'
  ]

  public desc:string[] = [
    'Embrace a fresh start abroad with our tailored immigration solutions, expertly guiding you through legalities, paperwork, for a smooth transition.',
    'Explore effortlessly with our comprehensive travel solutions, covering planning, bookings, and more for memorable journeys.',
    'Navigate educational journeys abroad smoothly, from institution selection to application management, achieving academic aspirations.',
    'Connect with top talent using our streamlined HR services, boosting business growth through efficient recruitment.'
  ]

  public links:string[] = [
    '/imigration',
    '/tourism',
    '/student',
    '/search'
  ]
}
