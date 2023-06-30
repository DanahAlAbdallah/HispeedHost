import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImigrationComponent } from '../imigration/imigration.component';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { ImmigrationData } from './Immigration';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImigrationService {

  private apiUrl:string = environment.apiLocalBaseUrl;

  constructor(private httpClient:HttpClient) { }

  public addImigration(imigration: ImmigrationData): Observable<ImmigrationData> {
    return this.httpClient.post<ImmigrationData>(this.apiUrl+'/api/v1/imigration/add', imigration)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  } 

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
