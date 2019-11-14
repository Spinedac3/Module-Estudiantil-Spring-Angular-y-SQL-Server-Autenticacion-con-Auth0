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
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './usuarios/user.service';
import { CommonModule } from '@angular/common';
import { CallbackComponent } from './callback/callback.component';
import { AuthService } from './callback/auth.service';
import { AuthGuard } from './notas/auth.guard';
import { NotasComponent } from './notas/notas.component';
import { NotasDetailComponent } from './notas/notas-detail/notas-detail.component';


const appRoutes: Routes = [
  { path: "", redirectTo: "notas", pathMatch: "full" },
  { path: "callback", component: CallbackComponent},
  { path: "notas", component: NotasComponent},
  { path: "notas/:id", component: NotasDetailComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CallbackComponent,
    NotasComponent,
    NotasDetailComponent
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
