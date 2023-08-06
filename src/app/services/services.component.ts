import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  public titles:any[] = ["IMIGRATION PROGRAM", "Tourism Visa", "Student Program", "Find an Emlpoyee"];
  public links:any[] = ["/imigration","/tourism","/student","/find"]
}
