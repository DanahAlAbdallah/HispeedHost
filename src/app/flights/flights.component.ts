import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../classes/web-socket.service';

@Component({
  selector: 'flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flights: string[] = [];

  constructor(private webSocketService: WebSocketService) { }

  ngOnInit(): void {
    try {
      this.webSocketService.connect().subscribe(() => {
        this.webSocketService.subscribeToFlights().subscribe((message) => {
          console.log('Received flight data:', message);
          this.flights.push(message);
        });
      });
    } catch (error) {
      console.log(error)
    }finally{
      this.webSocketService.disconnect();
    }
  }

  loadFlights(): void {
    try {
      this.webSocketService.loadFlights();
    } catch (error) {
      console.log(error)
    }finally{
      this.webSocketService.disconnect();
    }
  }
}
