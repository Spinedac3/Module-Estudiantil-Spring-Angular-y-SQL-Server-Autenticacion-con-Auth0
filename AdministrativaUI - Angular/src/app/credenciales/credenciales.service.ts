import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ICredenciales } from './credenciales';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CredencialesService {
  private credencialUrl = '/server/api/v1/credenciales';
  constructor(private http: HttpClient) { }
  getUsers(): Observable<ICredenciales[]>{
    let token = localStorage.getItem('access_token');
    return this.http.get<ICredenciales[]>(this.credencialUrl, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
  );
  }
  getUser(id: number): Observable<ICredenciales | undefined> {
    let token = localStorage.getItem('access_token');
    return this.getUsers().pipe(
      map((products: ICredenciales[]) => products.find(p => p.id_usuario_acceso === id),
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
      ),
      
    );
  }
  createCredentialRegistration(credencial){
    let body = JSON.stringify(credencial);
    return this.http.post(this.credencialUrl, body, httpOptions);
  }

  deleteCredencial(id: number): Observable<any>{
    return this.http.delete(`${this.credencialUrl}/${id}`, { responseType: 'text' });
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
