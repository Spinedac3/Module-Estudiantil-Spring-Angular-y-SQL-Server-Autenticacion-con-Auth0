import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AasignacionService } from '../aasignacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'at-asignar-alumno',
  templateUrl: './asignar-alumno.component.html',
  styleUrls: ['./asignar-alumno.component.css']
})
export class AsignarAlumnoComponent implements OnInit {
  userForm: FormGroup;
  validMessage: string = "";
  constructor(private aasignacionService: AasignacionService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      id_usuario: new FormControl('', Validators.required),
      id_asignatura: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }
  submitRegistration() {
    if (this.userForm.valid) {
      this.validMessage = "El Alumno se ha Asignado Correctamente";
      this.aasignacionService.createAsignacionRegistration(this.userForm.value).subscribe(
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
