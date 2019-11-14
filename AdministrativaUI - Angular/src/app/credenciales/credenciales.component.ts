import { Component, OnInit } from '@angular/core';
import { ICredenciales } from './credenciales';
import { CredencialesService } from './credenciales.service';

@Component({
  selector: 'at-credenciales',
  templateUrl: './credenciales.component.html',
  styleUrls: ['./credenciales.component.css']
})
export class CredencialesComponent implements OnInit {
  public pageTitle = 'Lista de Credenciales';
  errorMessage = '';
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCredenciales = this.listFilter ? this.performFilter(this.listFilter) : this.credenciales;
  }

  filteredCredenciales: ICredenciales[] = [];
  credenciales: ICredenciales[] = [];

  constructor(private credencialesService: CredencialesService) { }
  
  performFilter(filterBy: string): ICredenciales[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.credenciales.filter((credencial: ICredenciales) =>
      credencial.login.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  ngOnInit() {
    this.credencialesService.getUsers().subscribe(
      credencial => {
        this.credenciales = credencial;
        this.filteredCredenciales = this.credenciales;
      },
      error => this.errorMessage = <any>error
    );
  }
}


