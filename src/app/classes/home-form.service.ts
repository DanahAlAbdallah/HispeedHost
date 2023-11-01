import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HomeForm } from './home_form';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeFormService {


  private apiUrl:string = environment.apiLocalBaseUrl;

  constructor(private httpClient:HttpClient) { }

  public insertForm(feedback: HomeForm): Observable<any> {

    const observable = this.httpClient.post<any>(this.apiUrl+'/api/v1/feedback/new', feedback);
    return observable.pipe(
        retry(3),
        catchError((error: HttpErrorResponse) => {
          return throwError(() => new Error('Something bad happened; please try again later.'));
        })
    );
  } 
}
