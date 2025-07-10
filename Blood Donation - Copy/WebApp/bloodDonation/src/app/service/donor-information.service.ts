import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DonorInformationService {
  private readonly URL = 'http://localhost:3000/auth/getInformation';

  constructor(private http: HttpClient) {}

  getDonorInfo(): Observable<any> {
    return this.http.get<any>(`${this.URL}/getDonorInfo`).pipe(
      map((res: any) => res),
      catchError((error) => {
        console.error('Error fetching total blood count:', error);
        return throwError(() => new Error('Failed to fetch total blood count'));
      })
    );
  }
  getTotal(): Observable<any> {
    return this.http.get<any>(`${this.URL}/getTotal`).pipe(
      map((res: any) => res),
      catchError((error) => {
        console.error('Error fetching total blood count:', error);
        return throwError(() => new Error('Failed to fetch total blood count'));
      })
    );
  }

  getTotalApv(): Observable<any> {
    return this.http.get<any>(`${this.URL}/getTotalApv`).pipe(
      map((res: any) => res),
      catchError((error) => {
        console.error('Error fetching total Approve:', error);
        return throwError(() => new Error('Failed to fetch total Approve'));
      })
    );
  }

  getTotalReq(): Observable<any> {
    return this.http.get<any>(`${this.URL}/getTotalReq`).pipe(
      map((res: any) => res),
      catchError((error) => {
        console.error('Error fetching total Requestt:', error);
        return throwError(() => new Error('Failed to fetch total request'));
      })
    );
  }

  registerDonor(data: FormData): Observable<any> {
    return this.http.post(
      'http://localhost:3000/auth/getInformation/createDonor',
      data
    );
  }
  registerRecipient(data: FormData): Observable<any> {
    return this.http.post(
      'http://localhost:3000/auth/getInformation/createRecipient',
      data
    );
  }

  loginDonor(data: FormData): Observable<any> {
    return this.http.post(
      'http://localhost:3000/auth/getInformation/loginDonor',
      data
    );
  }

  postRequestInfo(data: FormData): Observable<any> {
    return this.http.post(
      'http://localhost:3000/auth/getInformation/postRequestInfo',
      data
    );
  }

  requestTableInfo(data: any): Observable<any> {
    return this.http.get(
      'http://localhost:3000/auth/getInformation/requestTableInfo?email=' + data
    );
  }

  getRecipientStatusInfo(data: any): Observable<any> {
    return this.http.get(
      'http://localhost:3000/auth/getInformation/getRecipientStatusInfo?email=' +
        data
    );
  }

  updateDonationStatus(updatedElement: any): Observable<any> {
    console.log(updatedElement, 'updatedElement');

    return this.http.put(
      'http://localhost:3000/auth/getInformation/updateDonationStatus',
      updatedElement
    );
  }
}
