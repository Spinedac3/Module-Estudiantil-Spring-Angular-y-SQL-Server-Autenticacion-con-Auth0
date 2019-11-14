import { Component, OnInit } from '@angular/core';
import { ICurso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'at-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public pageTitle = 'Lista de Cursos';
  errorMessage = '';
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCursos = this.listFilter ? this.performFilter(this.listFilter) : this.cursos;
  }
  filteredCursos: ICurso[] = [];
  cursos: ICurso[] = [];

  constructor(private cursoService: CursoService) { }
  
  performFilter(filterBy: string): ICurso[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.cursos.filter((credencial: ICurso) =>
      credencial.nombre.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  ngOnInit() {
    this.cursoService.getUsers().subscribe(
      curso => {
        this.cursos = curso;
        this.filteredCursos = this.cursos;
      },
      error => this.errorMessage = <any>error
    );
  }

}
