import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApplyForJob } from './applyforjob';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplyforjobService {


  private apiUrl:string = environment.apiLocalBaseUrl;

  constructor(private httpClient:HttpClient) { }

  public insertApply(apply: ApplyForJob, selectedFile:File | null |undefined): Observable<any> {

    const formData: FormData = new FormData();
    if(selectedFile != null){
      formData.append('cv', selectedFile, selectedFile.name);
      formData.append('applyjob', JSON.stringify(apply));
    }

    const observable = this.httpClient.post<any>(this.apiUrl+'/api/v1/applyjob/new',formData);
    return observable.pipe(
        retry(3),
        catchError((error: HttpErrorResponse) => {
          return throwError(() => new Error('Something bad happened; please try again later.'));
        })
    );
  } 
}
