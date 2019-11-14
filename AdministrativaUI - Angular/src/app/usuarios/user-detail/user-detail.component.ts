import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'at-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  errorMessage = '';
  userdetail: IUser | undefined;
  userForm: FormGroup;
  validMessage: string = "";

  constructor(private userService: UserService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
   const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getUser(id);
    }
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
  updateUserRegistration(id: number){
    if (this.userForm.valid) {
      this.validMessage = "Your User registration has been submitted. Thank you!";
      this.userService.updateUser(id,this.userForm.value).subscribe(
        data => {
          this.userForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }
  getUser(id: number) {
    this.userService.getProduct(id).subscribe(
      userdetail => this.userdetail = userdetail,
      error => this.errorMessage = <any>error);
      
  }
  deleteCredencial(id: number){
    this.userService.deleteUser(id).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/usuarios/allusers'])
      },
      error => console.log(error)
    );
  }
  

  
}
