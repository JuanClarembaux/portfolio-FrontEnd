import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  eduURL = 'https://backendcaf.herokuapp.com/educacion/';
  constructor(private http: HttpClient) { }

  public list() : Observable<any>{
    return this.http.get<Educacion[]>(this.eduURL + 'lista', httpOptions )
  }

  public detail(id: number): Observable<any> {
    return this.http.get<Educacion>(this.eduURL + `detail/${id}`)
  }

  public save(educacion: Educacion): Observable<any>{
    return this.http.post<any>(this.eduURL + 'create', educacion,httpOptions);
  }

  public update(id: number, educacion: Educacion): Observable<any> {
    return this.http.put<any>(this.eduURL + `update/${id}`, educacion, httpOptions);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.eduURL + `delete/${id}`);
  }

}
