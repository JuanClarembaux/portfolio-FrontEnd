import { Component, OnInit } from '@angular/core';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proye: Proyecto[] = [];
  isLogged = false;
  errorMessage = '';

  constructor(private proyectoService: ProyectoService, private tokenService: TokenService/*, private modalService: NgbModal*/) { }

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.isLoggedIn()){
      this.isLogged  = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.proyectoService.list().subscribe({
      next: data => {
        this.proye = data;
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }

  delete(id?: number){
    if(id != undefined){
      this.proyectoService.delete(id).subscribe({
      next:  data => {
          this.cargarProyecto();
        },
        error: err => {
          alert("No se pudo borrar el proyecto");
        }
      });
    }
  }

  openNewPro() {
    /*const modalRef = this.modalService.open(NewProyectoComponent);
    modalRef.componentInstance.name = 'World';*/
  }
}
