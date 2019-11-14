import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MasignacionService } from '../masignacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'at-asignar-maestro',
  templateUrl: './asignar-maestro.component.html',
  styleUrls: ['./asignar-maestro.component.css']
})
export class AsignarMaestroComponent implements OnInit {
  secciones: string[] = [
    'A',
    'B',
    'C',
  ];

  userForm: FormGroup;
  validMessage: string = "";
  constructor(private masignacionService: MasignacionService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      id_profesor: new FormControl('', Validators.required),
      id_curso: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      seccion: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }

  submitRegistration() {
    if (this.userForm.valid) {
      this.validMessage = "El Maestro se ha Asignado Correctamente";
      this.masignacionService.createAsignacionRegistration(this.userForm.value).subscribe(
        data => {
          this.userForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Porfavor llene todos los campos requeridos!";
    }
  }


}
