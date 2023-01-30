import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'https://backendcaf.herokuapp.com/personas/';
  constructor(private http:HttpClient) { }

  public getPersona(): Observable<any>{
    return this.http.get(this.URL + "traer/perfil", httpOptions)
  }
}
