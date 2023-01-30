import { Component, OnInit } from '@angular/core';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educa: Educacion[] | undefined;
  isLogged = false;
  errorMessage = '';

  constructor(private educacionService: EducacionService, private tokenService: TokenService/*, private modalService: NgbModal*/) { }

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.isLoggedIn()){
      this.isLogged  = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionService.list().subscribe({
      next: data => {
        this.educa = data;
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }

  delete(id?: number){
    if(id != undefined){
      this.educacionService.delete(id).subscribe({
      next:  data => {
          this.cargarEducacion();
        },
        error: err => {
          alert("No se pudo borrar la educacion");
        }
      });
    }
  }

  openNewEdu() {
    /*const modalRef = this.modalService.open(NewEducacionComponent);
    modalRef.componentInstance.name = 'World';*/
  }
}
