import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IAsignacionAlumno } from './iasignacion-alumno';
import { tap, catchError, map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AasignacionService {
  private asignacionAlumnosUrl = '/server/api/v1/asignaciones/alumnos';
  constructor(private http: HttpClient) { }
  getDatosAlumnos(): Observable<IAsignacionAlumno[]>{
    let token = localStorage.getItem('access_token');
    return this.http.get<IAsignacionAlumno[]>(this.asignacionAlumnosUrl, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
  );}

  getAsginacion(id: number): Observable<IAsignacionAlumno | undefined> {
    let token = localStorage.getItem('access_token');
    return this.getDatosAlumnos().pipe(
      map((products: IAsignacionAlumno[]) => products.find(p => p.id_asignatura_usuario === id)
      ,{headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)})
    );
  }

  createAsignacionRegistration(asignacion){
    let body = JSON.stringify(asignacion);
    return this.http.post(this.asignacionAlumnosUrl, body, httpOptions);
  }

  deleteAsignacion(id: number): Observable<any>{
    return this.http.delete(`${this.asignacionAlumnosUrl}/${id}`, { responseType: 'text' });
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
