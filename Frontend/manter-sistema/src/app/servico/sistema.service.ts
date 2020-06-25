import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sistema } from '../Modelo/Sistema';
import { Observable, EMPTY } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SistemaService {

  constructor(private http: HttpClient, private sb: MatSnackBar) { }

  /*httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }*/

  baseURL = 'http://localhost:8080/sistema';

  create(sistema: Sistema): Observable<Sistema>{
    return this.http.post<Sistema>(this.baseURL, sistema)
    .pipe(map((obj) => obj),
      catchError(e => this.error(e)));
  }

  showAll(): Observable<Sistema[]>{
    return this.http.get<Sistema[]>(this.baseURL)
    .pipe(map((obj) => obj),
      catchError(e => this.error(e)));
  }

  showById(id: number): Observable<Sistema>{
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Sistema>(url)
    .pipe(map((obj) => obj),
      catchError(e => this.error(e)));
  }

  update(id: number, sistema: Sistema): Observable<Sistema>{
    const url = `${this.baseURL}/${id}`;
    return this.http.put<Sistema>(url, sistema)
    .pipe(map((obj) => obj),
      catchError(e => this.error(e)));
  }

  /*delete(sistema: Sistema | number): Observable<Sistema>{
    const id = typeof sistema === 'number' ? sistema: sistema.id;
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Sistema>(this.baseURL, this.httpOptions);
  }*/

  showMessage(msg: string, isError: boolean = false){
    this.sb.open(msg, '',
      {
        duration: 4000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: isError ? ['msg-error'] : ['msg-sucess']
      });
  }

  error(e: any): Observable<any>{
    console.log(e);
    this.showMessage('Falha na Comunicação com o Banco de Dados', true);
    return EMPTY;
  }

}
