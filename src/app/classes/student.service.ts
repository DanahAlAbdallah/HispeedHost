import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from './student';
import {retry, catchError, throwError,Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl:string = environment.apiLocalBaseUrl;

  constructor(private httpClient:HttpClient) { }

  public addStudent(student: Student): Observable<any> {

    const observable = this.httpClient.post<any>(this.apiUrl+'/api/v1/student/add', student);
    return observable.pipe(
        retry(3),
        catchError((error: HttpErrorResponse) => {
          return throwError(() => new Error('Something bad happened; please try again later.'));
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
