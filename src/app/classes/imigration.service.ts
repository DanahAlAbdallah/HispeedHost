import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { ImmigrationData, ImmigrationResponse } from './Immigration';
import { environment } from 'src/environments/environment';
import { ImmigrationHrRequest } from './ImmigrationHrRequest';

@Injectable({
  providedIn: 'root'
})
export class ImigrationService {

  private apiUrl:string = environment.apiLocalBaseUrl;
  private passCountryCodeBaseUrl:string = environment.apiPassportCountryCodeBaseUrl;
  private currentResidenceBaseUrl:string = environment.currentResidenceBaseUrl;

  constructor(private httpClient:HttpClient) { }

  public addImigrationWithImage(imigration: ImmigrationData, selectedFile:File | null |undefined, imageUpload:File): Observable<ImmigrationResponse> {

    const formData: FormData = new FormData();
    if(selectedFile != null){
      formData.append('cv', selectedFile, selectedFile.name);
      formData.append('image', imageUpload, imageUpload.name);
      formData.append('imigration', JSON.stringify(imigration));
    }

    const observable = this.httpClient.post<ImmigrationResponse>(this.apiUrl+'/api/v1/immigrations/add',formData);
    return observable.pipe(
        retry(3),
        catchError((error: HttpErrorResponse) => {
          return throwError(() => new Error('Something bad happened; please try again later.'));
        })
    );
  }


  public addImigration(imigration: ImmigrationData, selectedFile:File | null |undefined): Observable<ImmigrationResponse> {

    const formData: FormData = new FormData();
    if(selectedFile != null){
      formData.append('cv', selectedFile, selectedFile.name);
      formData.append('imigration', JSON.stringify(imigration));
    }

    const observable = this.httpClient.post<ImmigrationResponse>(this.apiUrl+'/api/v1/immigrations/add',formData);
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



  public getHrResultsWithSpecificCondition(imiHrReq: ImmigrationHrRequest): Observable<any[]> {


    let params = new HttpParams();
    params = params.set('profession', imiHrReq.profession);
    params = params.set('gender', imiHrReq.gender);
    params = params.set('nationality', imiHrReq.nationality);

    return this.httpClient.get<any[]>(this.apiUrl+'/api/v1/immigrations/hr',{params}).pipe(
      retry(3),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error('Something bad happened; please try again later.'));
      })
    );
  }

  public getAllHrResults(page:number, pageSize:number): Observable<any[]> {

    let params = new HttpParams();
    params = params.set('page', page);
    params = params.set('pageSize', pageSize);


    return this.httpClient.get<any[]>(this.apiUrl+'/api/v1/immigrations/hr/all', {params}).pipe(
      retry(3),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error('Something bad happened; please try again later.'));
      })
    );
  }

  public getAllProfessions(): Observable<any[]> {

    return this.httpClient.get<any[]>(this.apiUrl+'/api/v1/immigrations/profession/all').pipe(
      retry(3),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error('Something bad happened; please try again later.'));
      })
    );
  }

  public getAllYears(): Observable<any[]> {

    return this.httpClient.get<any[]>(this.apiUrl+'/api/v1/immigrations/years/all').pipe(
      retry(3),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error('Something bad happened; please try again later.'));
      })
    );
  }
}
