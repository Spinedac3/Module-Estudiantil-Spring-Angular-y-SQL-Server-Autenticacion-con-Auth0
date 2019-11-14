import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CredencialesService } from '../credenciales.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'at-create-credencial',
  templateUrl: './create-credencial.component.html',
  styleUrls: ['./create-credencial.component.css']
})
export class CreateCredencialComponent implements OnInit {
  userForm: FormGroup;
  validMessage: string = "";
  constructor(private credencialService: CredencialesService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      id_usuario: new FormControl('', Validators.required),
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      contact: new FormControl()
  });
  }
  submitRegistration() {
    if (this.userForm.valid) {
      this.validMessage = "La Credencial ah sido creado Correctamente";
      this.credencialService.createCredentialRegistration(this.userForm.value).subscribe(
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
