import { Component } from '@angular/core';

@Component({
  selector: 'app-imigration',
  templateUrl: './imigration.component.html',
  styleUrls: ['./imigration.component.css']
})
export class ImigrationComponent {


  public items:string[] =['Work', 'Permanent Resident', 'Student','Temporary Resident','Other']

  public items2:string[] = ['Yes', 'No'];

  public items3:string[] = ['excellent','Very good','Good', 'Moderate','Low','Very low'];
}
