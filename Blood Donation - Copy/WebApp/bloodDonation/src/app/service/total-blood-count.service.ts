import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TotalBloodCountService {
  private readonly URL = 'http://localhost:3000/auth/getInformation';

  constructor(private http: HttpClient) {}

  getTotalBloodCountOfAPositive(): Observable<any> {
    return this.http.get<any>(`${this.URL}/A_Positive`).pipe(
      map((res: any) => res),
      catchError((error) => {
        console.error('Error fetching total blood count:', error);
        return throwError(() => new Error('Failed to fetch total blood count'));
      })
    );
  }

  getTotalBloodCountOfANegative(): Observable<any> {
    return this.http.get<any>(`${this.URL}/A_Negative`).pipe(
      map((res: any) => res),
      catchError((error) => {
        console.error('Error fetching total blood count:', error);
        return throwError(() => new Error('Failed to fetch total blood count'));
      })
    );
  }

  getTotalBloodCountOfBPositive(): Observable<any> {
    return this.http.get<any>(`${this.URL}/B_Positive`).pipe(
      map((res: any) => res),
      catchError((error) => {
        console.error('Error fetching total blood count:', error);
        return throwError(() => new Error('Failed to fetch total blood count'));
      })
    );
  }

  getTotalBloodCountOfBNegative(): Observable<any> {
    return this.http.get<any>(`${this.URL}/B_Negative`).pipe(
      map((res: any) => res),
      catchError((error) => {
        console.error('Error fetching total blood count:', error);
        return throwError(() => new Error('Failed to fetch total blood count'));
      })
    );
  }

  getTotalBloodCountOfOPositive(): Observable<any> {
    return this.http.get<any>(`${this.URL}/O_Positive`).pipe(
      map((res: any) => res),
      catchError((error) => {
        console.error('Error fetching total blood count:', error);
        return throwError(() => new Error('Failed to fetch total blood count'));
      })
    );
  }

  getTotalBloodCountOfONegative(): Observable<any> {
    return this.http.get<any>(`${this.URL}/O_Negative`).pipe(
      map((res: any) => res),
      catchError((error) => {
        console.error('Error fetching total blood count:', error);
        return throwError(() => new Error('Failed to fetch total blood count'));
      })
    );
  }

  getTotalBloodCountOfABPositive(): Observable<any> {
    return this.http.get<any>(`${this.URL}/AB_Positive`).pipe(
      map((res: any) => res),
      catchError((error) => {
        console.error('Error fetching total blood count:', error);
        return throwError(() => new Error('Failed to fetch total blood count'));
      })
    );
  }

  getTotalBloodCountOfABNegative(): Observable<any> {
    return this.http.get<any>(`${this.URL}/AB_Negative`).pipe(
      map((res: any) => res),
      catchError((error) => {
        console.error('Error fetching total blood count:', error);
        return throwError(() => new Error('Failed to fetch total blood count'));
      })
    );
  }
}
