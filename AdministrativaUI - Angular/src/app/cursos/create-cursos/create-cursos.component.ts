import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CursoService } from '../curso.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'at-create-cursos',
  templateUrl: './create-cursos.component.html',
  styleUrls: ['./create-cursos.component.css']
})
export class CreateCursosComponent implements OnInit {
  userForm: FormGroup;
  validMessage: string = "";
  constructor(private cursoService: CursoService) { }


  ngOnInit() {
    this.userForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      contact: new FormControl()
  });
  }
  submitRegistration() {
    if (this.userForm.valid) {
      this.validMessage = "El Curso ah sido creado Correctamente";
      this.cursoService.createCursoRegistration(this.userForm.value).subscribe(
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
