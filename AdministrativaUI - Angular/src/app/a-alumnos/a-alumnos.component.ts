import { Component, OnInit } from '@angular/core';
import { IAsignacionAlumno } from './iasignacion-alumno';
import { AasignacionService } from './aasignacion.service';

@Component({
  selector: 'at-a-alumnos',
  templateUrl: './a-alumnos.component.html',
  styleUrls: ['./a-alumnos.component.css']
})
export class AAlumnosComponent implements OnInit {
  public pageTitle = 'Lista de Alumnos Asignados';
  errorMessage = '';
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredAsignaciones = this.listFilter ? this.performFilter(this.listFilter) : this.asignaciones;
  }
  filteredAsignaciones: IAsignacionAlumno[] = [];
  asignaciones: IAsignacionAlumno[] = [];
  constructor(private aAsignacionesService: AasignacionService) { }
  performFilter(filterBy: string): IAsignacionAlumno[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.asignaciones.filter((asignacion: IAsignacionAlumno) =>
      asignacion.id_asignatura_usuario.toString().toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {
    this.aAsignacionesService.getDatosAlumnos().subscribe(
      asignacion => {
        this.asignaciones = asignacion;
        this.filteredAsignaciones = this.asignaciones;
      },
      error => this.errorMessage = <any>error
    );
  }

}
