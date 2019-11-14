import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MenuModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";




import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UserComponent } from './usuarios/usuarios.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { AllusersComponent } from './usuarios/allusers/allusers.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './usuarios/user-detail/user-detail.component';
import { UserService } from './usuarios/user.service';
import { CreateUserComponent } from './usuarios/create-user/create-user.component';
import { CursosComponent } from './cursos/cursos.component';
import { CredencialesComponent } from './credenciales/credenciales.component';
import { CommonModule } from '@angular/common';
import { AMaestrosComponent } from './a-maestros/a-maestros.component';
import { AAlumnosComponent } from './a-alumnos/a-alumnos.component';
import { CredencialDetailComponent } from './credenciales/credencial-detail/credencial-detail.component';
import { CursoDetailComponent } from './cursos/curso-detail/curso-detail.component';
import { EnmascaradoPipe } from './credenciales/enmascarado.pipe';
import { AMaestrosDetailComponent } from './a-maestros/a-maestros-detail/a-maestros-detail.component';
import { AAlumnosDetailComponent } from './a-alumnos/a-alumnos-detail/a-alumnos-detail.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthService } from './callback/auth.service';
import { AuthGuard } from './usuarios/auth.guard';
import { CreateCredencialComponent } from './credenciales/create-credencial/create-credencial.component';
import { CreateCursosComponent } from './cursos/create-cursos/create-cursos.component';
import { AsignarMaestroComponent } from './a-maestros/asignar-maestro/asignar-maestro.component';
import { AsignarAlumnoComponent } from './a-alumnos/asignar-alumno/asignar-alumno.component';


const appRoutes: Routes = [
  { path: "", redirectTo: "usuarios", pathMatch: "full" },
  { path: "usuarios/allusers/:id", component: UserDetailComponent, canActivate: [AuthGuard]},
  { path: "usuarios/allusers", component: AllusersComponent, canActivate: [AuthGuard]},
  { path: "maestros/asignaciones/:id", component: AMaestrosDetailComponent, canActivate: [AuthGuard]},
  { path: "maestros/asignaciones", component: AMaestrosComponent, canActivate: [AuthGuard]},
  { path: "alumnos/asignaciones/:id", component: AAlumnosDetailComponent, canActivate: [AuthGuard]},
  { path: "alumnos/asignaciones", component: AAlumnosComponent, canActivate: [AuthGuard]},
  { path: "usuarios", component: UserComponent, canActivate:[AuthGuard] },
  { path: 'create/credencial' , component: CreateCredencialComponent},
  { path: 'create/curso', component: CreateCursosComponent},
  { path: 'asignar/alumnos', component: AsignarAlumnoComponent},
  { path: 'asignar/maestros', component: AsignarMaestroComponent },
  { path: "credenciales/:id", component: CredencialDetailComponent, canActivate: [AuthGuard]},
  { path: "credenciales", component: CredencialesComponent , canActivate: [AuthGuard]},
  { path: "cursos/:id", component: CursoDetailComponent, canActivate: [AuthGuard]},
  { path: "cursos", component: CursosComponent, canActivate: [AuthGuard]},
  { path: "create", component: CreateUserComponent},
  { path: "callback", component: CallbackComponent}

  
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllusersComponent,
    UserDetailComponent,
    CreateUserComponent,
    CursosComponent,
    CredencialesComponent,
    AMaestrosComponent,
    AAlumnosComponent,
    CredencialDetailComponent,
    CursoDetailComponent,
    EnmascaradoPipe,
    AMaestrosDetailComponent,
    AAlumnosDetailComponent,
    CallbackComponent,
    CreateCredencialComponent,
    CreateCursosComponent,
    AsignarMaestroComponent,
    AsignarAlumnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MenuModule,
    CardModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [UserService, AuthService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
