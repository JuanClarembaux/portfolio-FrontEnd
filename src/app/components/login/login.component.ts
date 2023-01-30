import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  roles: string[] = [];
  label:  string | undefined;

  form: any = {
    nombreUsuario: null,
    password : null
  };

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.isLoggedIn()){
      this.isLogged  = true;
      this.roles = this.tokenService.getUsername().roles;
    }
  }

  onSubmit(): void{
    const { nombreUsuario, password } = this.form;
    this.authService.login(nombreUsuario, password).subscribe({
      next: data => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setUsername(data);
        this.roles = this.tokenService.getUsername().roles;
        this.router.navigate([''])
        //this.reloadPage();
    }, error: err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        alert(this.label = "Contraseña o usuario incorrectos")
      }
    })
  }

  reloadPage(): void {
    window.location.reload();
  }

}
