export class FlightRequest{
    location_from:string;
    location_to:string;
    departure_date:string;
    return_date:string;
    page:number;
    adult_number: number;

    constructor(){

            this.location_from = '';
            this.location_to = '';
            this.departure_date = '';
            this.return_date = '';
            this.adult_number = 1;
            this.page = 1;
    }
}