import { Component,OnInit } from '@angular/core';
import { FlightsService } from '../classes/flights.service';
import { FlightRequest } from '../classes/flights';

@Component({
  selector: 'app-flighttickiting',
  templateUrl: './flighttickiting.component.html',
  styleUrls: ['./flighttickiting.component.css']
})
export class FlighttickitingComponent implements OnInit {
   
    public items:string[] = ['Round-Trip','Flight & Hotel','I prefer direct flights'];
    public hideBack:boolean = true;
    public isLoadingFlights= false;

    public flights:any[] = [];

    constructor(private flightService:FlightsService){}

    ngOnInit(): void {
      
      // this.flightService.loadFlights(r).subscribe({
      //   next: (v:any) => { console.log(v.data.flights)},
      //   error: (e) => {
            
      //       console.log(e.error)
      //   },
      //   complete: () =>{
          
      //   } 
      // });

    }

    public hideBackFun(hideBack:boolean){
      this.hideBack = hideBack;
    }

    public isLoadingFlightsFun(isLoadingFlights:boolean){
      this.isLoadingFlights = isLoadingFlights;
    }

    public flightsFun(flights:any[]){
      this.flights = flights;
    }
}
