import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FlightRequest } from './flights';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  private apiFlightsBaseUrl:string = environment.apiFlightsBaseUrl;

  constructor(private httpClient:HttpClient) { }


  public loadFlights(flight:FlightRequest):Observable<any[]>{
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('X-RapidAPI-Key', 'bce6057fb3msh6e434cae2d08f1bp14f4efjsn2ea14d1a1ce7');
    httpHeaders = httpHeaders.append('X-RapidAPI-Host', 'booking-com13.p.rapidapi.com');

    let httpParams = new HttpParams();
    httpParams = httpParams.append('location_from',flight.location_from);
    httpParams = httpParams.append('location_to',flight.location_to);
    httpParams = httpParams.append('departure_date',flight.departure_date);
    httpParams = httpParams.append('return_date',flight.return_date);
    httpParams = httpParams.append('page',flight.page);
    httpParams = httpParams.append('adult_number',flight.adult_number);


    return this.httpClient.get<any[]>(this.apiFlightsBaseUrl + "/return", { headers: httpHeaders,params:httpParams })
                          .pipe(
                            // retry(1),
                            catchError(this.handleError)
                          );

  
}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
        // if(error.status === 500){
        //   this.error = "Internal Server Error , please try again later";
        // }
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
