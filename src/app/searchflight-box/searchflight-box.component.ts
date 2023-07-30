import { Component, EventEmitter, Output } from '@angular/core';
import { FlightRequest } from '../classes/flights';
import { FlightsService } from '../classes/flights.service';

@Component({
  selector: 'app-searchflight-box',
  templateUrl: './searchflight-box.component.html',
  styleUrls: ['./searchflight-box.component.css']
})
export class SearchflightBoxComponent {

  public items:string[] = ['Round-Trip','Flight & Hotel','I prefer direct flights'];
  public flight:FlightRequest = new FlightRequest();
  flights:any[] = [];

  // public imgPath1 = "/assets/tayara.png";
  // public imgPath2 = "/assets/🦆 icon _calendar_.png";
  // public placeHolder:string = "Where from?";
  // public placeholder1:string = "Where to?";
  // public placeholder2:string = "Mon, 19 Jun";
  // public placeholder3:string = "Mon, 29 Jun";

  @Output() newItemEvent = new EventEmitter<boolean>();
  @Output() isLoadingEvent = new EventEmitter<boolean>();
  @Output() flightsEvent = new EventEmitter<any>();

  public hideBack:boolean = true;

  public isLoading:boolean = false;

  constructor(private flightService:FlightsService){}

  ngOnInit(): void {
    
   
  }

  public search():void{
    if(this.flight.location_from === "" || 
        this.flight.location_to === "" ||
        this.flight.departure_date === "" ||
        this.flight.return_date === ""){

          return;
    }
    this.hideBack = false;
    this.isLoading = true;

    this.newItemEvent.emit(this.hideBack);
    this.isLoadingEvent.emit(this.isLoading);

    this.loadFlights();
  }


  public loadFlights(){
     this.flightService.loadFlights(this.flight).subscribe({
      next: (v:any) => { 
        this.isLoading = false,     
        this.isLoadingEvent.emit(this.isLoading),
        this.flights = v.data.flights
        this.flightsEvent.emit(this.flights);
      },
      error: (e) => {
        this.isLoading = false,     
        this.isLoadingEvent.emit(this.isLoading),
        this.flights = e
        this.flightsEvent.emit(["No Flights , Or Try Again"]);
          console.log(e.error)
      },
      complete: () =>{
        
      } 
    });
  }
}
