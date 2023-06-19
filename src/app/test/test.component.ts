import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public items:string[] =['Work', 'Permanent Resident', 'Student','Temporary Resident','Other']

}
