import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Proyecto } from '../models/proyecto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proURL = 'https://backendcaf.herokuapp.com/proyecto/';
  constructor(private http: HttpClient) { }

  public list() : Observable<any>{
    return this.http.get<Proyecto[]>(this.proURL + 'lista', httpOptions )
  }

  public detail(id: number): Observable<any> {
    return this.http.get<Proyecto>(this.proURL + `detail/${id}`)
  }

  public save(proyecto: Proyecto): Observable<any>{
    return this.http.post<any>(this.proURL + 'create', proyecto,httpOptions);
  }

  public update(id: number, proyecto: Proyecto): Observable<any> {
    return this.http.put<any>(this.proURL + `update/${id}`, proyecto, httpOptions);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.proURL + `delete/${id}`);
  }

}
