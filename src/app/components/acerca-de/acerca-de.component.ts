import { Component, OnInit} from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{
  persona: any = {
    persoNombre: null,
    persoApellido: null
  }
  errorMessage = '';

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe({
      next: data => {
      this.persona = data;
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }
}
