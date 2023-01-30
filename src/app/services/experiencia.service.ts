import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  expURL = 'https://backendcaf.herokuapp.com/explab/'
  constructor(private http: HttpClient) { }

  public list() : Observable<any>{
    return this.http.get<Experiencia[]>(this.expURL + 'lista', httpOptions )
  }

  public detail(id: number): Observable<any> {
    return this.http.get<Experiencia>(this.expURL + `detail/${id}`)
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.http.post<any>(this.expURL + 'create', experiencia,httpOptions);
  }

  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.http.put<any>(this.expURL + `update/${id}`, experiencia, httpOptions);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.expURL + `delete/${id}`);
  }

}
