import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  expe: Experiencia[] = [];
  isLogged = false;
  errorMessage = '';

  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService/*, private modalService: NgbModal*/) { }



  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.isLoggedIn()){
      this.isLogged  = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.experienciaService.list().subscribe({
      next: data => {
        this.expe = data;
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }

  delete(id?: number){
    if(id != undefined){
      this.experienciaService.delete(id).subscribe({
      next:  data => {
          this.cargarExperiencia();
        },
        error: err => {
          alert("No se pudo borrar la experiencia");
        }
      });
    }
  }

  openNewExp() {
    /*const modalRef = this.modalService.open(NewExperienciaComponent);
    modalRef.componentInstance.name = 'World';*/
  }
}
