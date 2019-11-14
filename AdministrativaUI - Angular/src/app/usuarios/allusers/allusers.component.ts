import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../user';
import { AuthService } from 'app/callback/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'at-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  public pageTitle = 'Lista de Usuarios';
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredUsers = this.listFilter ? this.performFilter(this.listFilter) : this.users;
  }

  filteredUsers: IUser[] = [];
  users: IUser[] = [];

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  performFilter(filterBy: string): IUser[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.users.filter((user: IUser) =>
      user.nombre.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }



  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
        this.filteredUsers = this.users;
      },
      error => this.errorMessage = <any>error
    );
  }

  cerrarSesion(){
      this.authService.logout();
  }
  }


