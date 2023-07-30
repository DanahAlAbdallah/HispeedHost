import { Component, Input, OnInit } from '@angular/core';
import { WebSocketService } from '../classes/web-socket.service';

@Component({
  selector: 'flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  @Input() flights: string[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
