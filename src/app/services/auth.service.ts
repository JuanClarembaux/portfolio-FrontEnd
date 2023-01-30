import { HttpClient, HttpErrorResponse , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Jwt } from '../models/jwt';
import { Login } from '../models/login';
import { Usuario } from '../models/usuario';

const authURL = 'https://backendcaf.herokuapp.com/auth/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private handleError(error:
    HttpErrorResponse) {
      if(error.status === 0){
        console.error('An error ocurred:', error.error)
      }else {
        console.error('Backend returned code ${error.status}, body was: ', error.error)
      }
      return throwError(() => new Error('Something bad happened; please try again later.'))
    };
  constructor(private httClient: HttpClient) { }

/*  public nuevo(nuevoUsuario: NuevoUsuario): any{
    const nuevoObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.httClient.post<any>(this.authURL + 'nuevo', nuevoUsuario))
      }, 1000);
    })
    return nuevoObservable;
  }

  public login(loginUsuario: LoginUsuario): any{
    const loginObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.httClient.post<JwtDto>(this.authURL + 'login', loginUsuario))
      }, 1000);
    })
    return loginObservable;
  } */
  /* public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  } */
  //Implementación propia de observables
  public nuevo(Usuario: Usuario): Observable<any>{
    return this.httClient.post(authURL + 'nuevo', Usuario, httpOptions);
  }

  login(nombreUsuario: string, password: string): Observable<any>{
    return this.httClient.post(authURL + 'login',
    {
      nombreUsuario,
      password,
    },
    httpOptions);
  }
}
