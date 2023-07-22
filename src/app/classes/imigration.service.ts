import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImigrationComponent } from '../imigration/imigration.component';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { ImmigrationData, ImmigrationResponse } from './Immigration';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImigrationService {

  private apiUrl:string = environment.apiLocalBaseUrl;
  private passCountryCodeBaseUrl:string = environment.apiPassportCountryCodeBaseUrl;
  private currentResidenceBaseUrl:string = environment.currentResidenceBaseUrl;

  constructor(private httpClient:HttpClient) { }

  public addImigration(imigration: ImmigrationData): Observable<ImmigrationResponse> {
    return this.httpClient.post<ImmigrationResponse>(this.apiUrl+'/api/v1/imigration/add', imigration)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  } 

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  public loadPassportCountryCode():Observable<any[]>{
      let httpHeaders = new HttpHeaders();
      httpHeaders = httpHeaders.append('X-RapidAPI-Key', 'bce6057fb3msh6e434cae2d08f1bp14f4efjsn2ea14d1a1ce7');
      httpHeaders = httpHeaders.append('X-RapidAPI-Host', 'visa-requirements4.p.rapidapi.com');

      return this.httpClient.get<any[]>(this.passCountryCodeBaseUrl + "/countries", { headers: httpHeaders })
                            .pipe(
                              // retry(1),
                              catchError(this.handleError)
                            );

    
  }

  public loadCurrentResidenceCountries():Observable<any[]>{
    return this.httpClient.get<any[]>(this.currentResidenceBaseUrl + "/all")
                          .pipe(
                            retry(1),
                            catchError(this.handleError)
                          );

  
}
}
