import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  public titles:any[] = ["IMMIGRATION PROGRAM", "Tourism Visa", "Student Program", "Find an Employee"];
  public links:any[] = ["/imigration","/tourism","/student","/search"]
  public description:any[] = [
    'Tailored solutions for relocating abroad; we guide you through legalities, paperwork, and needs for a seamless transition.',
    'Easily obtain tourism visas for diverse destinations, ensuring smooth entries and carefree travel experiences.',
    'Navigate educational journeys abroad smoothly, from institution selection to application management, achieving academic aspirations.',
    'Connect with top talent using our streamlined HR services, boosting business growth through efficient recruitment.'
  ]


  constructor(private router:Router){
      //subscribes every changes of your route
      this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd){
             //scroll to top
             window.scrollTo(0,0);
          }
   });
  }
}
