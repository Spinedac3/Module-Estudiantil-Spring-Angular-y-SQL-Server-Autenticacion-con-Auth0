import { Component, OnInit } from '@angular/core';
import { IUser } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'at-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  validMessage: string = "";
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
      this.userForm = new FormGroup({
          id_tipo_usuario: new FormControl('', Validators.required),
          nombre: new FormControl('', Validators.required),
          apellido: new FormControl('', Validators.required),
          telefono: new FormControl('', Validators.required),
          email: new FormControl('', Validators.required),
          direccion: new FormControl('', Validators.required),
          cod_postal: new FormControl('', Validators.required),
          fecha_nacimiento: new FormControl('', Validators.required),
          fecha_ingreso: new FormControl('', Validators.required),
          contact: new FormControl()
      });
  }
  submitRegistration() {
    if (this.userForm.valid) {
      this.validMessage = "El usuario ah sido creado Correctamente";
      this.userService.createUserRegistration(this.userForm.value).subscribe(
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



