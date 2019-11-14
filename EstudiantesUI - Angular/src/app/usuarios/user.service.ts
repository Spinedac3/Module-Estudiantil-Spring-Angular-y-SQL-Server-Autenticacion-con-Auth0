import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IUser } from './user';
import { text } from '@angular/core/src/render3';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
  })
export class UserService {
  private productUrl = '/server/api/v1/users';
  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<IUser[]>{
    let token = localStorage.getItem('access_token');
      return this.http.get<IUser[]>(this.productUrl,{headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
    );
  }
  getProduct(id: number): Observable<IUser | undefined> {
    let token = localStorage.getItem('access_token');
    return this.getUsers().pipe(
      map((products: IUser[]) => products.find(p => p.id_usuario === id),
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
)
    );
  }
  updateUser(id: number,userUpdate){
    let body = JSON.stringify(userUpdate);
    return this.http.put(`${this.productUrl}/${id}`, body);
  }
  createUserRegistration(user){
    let token = localStorage.getItem('access_token');
    let body = JSON.stringify(user);
    return this.http.post(this.productUrl, body, httpOptions);
  }
  
  
  deleteUser(id: number): Observable<any>{
        return this.http.delete(`${this.productUrl}/${id}`, { responseType: 'text' });
  }

  

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
  