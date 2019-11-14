import {CanActivate} from "@angular/router";
import { Injectable } from '@angular/core';
import { AuthService } from "app/callback/auth.service";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {
  }

  canActivate() {
    if(this.authService.isAuthenticated()) {
      return true;
    } else {
      this.authService.login();
    }
  }
}
