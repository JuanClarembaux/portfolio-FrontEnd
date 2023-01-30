import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY  = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  roles: Array<string> = [];
  constructor() { }

  public setToken(token: string ) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken():string{
    return sessionStorage.getItem(TOKEN_KEY)!;
  }

  public setUsername(nombreUsuario: any): void{
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, JSON.stringify(nombreUsuario));
  }

  public getUsername():any{
    const nombreUsuario = window.sessionStorage.getItem(USERNAME_KEY);
    if(nombreUsuario) {
      return JSON.parse(nombreUsuario);
    }
    return {};
  }

  public setAuthorities(authorities: string[]): void{
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[]{
    this.roles = [];
    if(sessionStorage.getItem(AUTHORITIES_KEY)){
      try{
        JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority:any) => {
          this.roles.push(authority.authority);
        });
      }catch (err:any) {
        console.log(err.message);
      }

    }
    return this.roles;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USERNAME_KEY);
    if (user) {
      return true;
    }
    return false;
  }

  logOut(): void{
    window.sessionStorage.clear();
}
}
