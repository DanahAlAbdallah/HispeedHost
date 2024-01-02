import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TourismVisa } from './tourismvisa';
import { Observable, retry, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourismService {

  private apiUrl:string = environment.apiLocalBaseUrl;

  constructor(private httpClient:HttpClient) { }

  public addTourismVisa(tourism: TourismVisa): Observable<any> {

    const observable = this.httpClient.post<any>(this.apiUrl+'/api/v1/tourism/add', tourism);
    return observable.pipe(
        retry(3),
      catchError((error: HttpErrorResponse) => {
        let errorMsg = error.error.data.response;
        if (errorMsg && errorMsg == "You're already applied to form.") {
          return throwError(() => new Error(errorMsg));

        }
          return throwError(() => new Error('Something bad happened, please try again later.'));
      })
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

}
