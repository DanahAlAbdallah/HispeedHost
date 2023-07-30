import { Component, Input } from '@angular/core';
import { FlightRequest } from '../classes/flights';

@Component({
  selector: 'app-inputflightsinfo',
  templateUrl: './inputflightsinfo.component.html',
  styleUrls: ['./inputflightsinfo.component.css']
})
export class InputflightsinfoComponent {

  @Input() placeholder:string = "";
  @Input() photoPath:string = "";
  @Input() hideBack:boolean = true;

  public flightData:string = "";
 
}
