import { Component, OnInit } from '@angular/core';
import { IAsignacionMaestro } from './iasignacion-maestro';
import { MasignacionService } from './masignacion.service';

@Component({
  selector: 'at-a-maestros',
  templateUrl: './a-maestros.component.html',
  styleUrls: ['./a-maestros.component.css']
})
export class AMaestrosComponent implements OnInit {
  public pageTitle = 'Lista de Maestros Asignados';
  errorMessage = '';
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredAsignaciones = this.listFilter ? this.performFilter(this.listFilter) : this.asignaciones;
  }
  filteredAsignaciones: IAsignacionMaestro[] = [];
  asignaciones: IAsignacionMaestro[] = [];
  constructor(private mAsignacionService: MasignacionService) { }

  performFilter(filterBy: string): IAsignacionMaestro[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.asignaciones.filter((credencial: IAsignacionMaestro) =>
      credencial.nombre.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {
    this.mAsignacionService.getDatos().subscribe(
      asignacion => {
        this.asignaciones = asignacion;
        this.filteredAsignaciones = this.asignaciones;
      },
      error => this.errorMessage = <any>error
    );
  }
  

}
