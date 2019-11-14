import { Component, OnInit } from '@angular/core';
import { IAsignacionAlumno } from '../iasignacion-alumno';
import { AasignacionService } from '../aasignacion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'at-a-alumnos-detail',
  templateUrl: './a-alumnos-detail.component.html',
  styleUrls: ['./a-alumnos-detail.component.css']
})
export class AAlumnosDetailComponent implements OnInit {
  errorMessage = '';
  asignaciondetail: IAsignacionAlumno | undefined;
  constructor(private aAsignacionService: AasignacionService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getAsignacion(id);
    }
  }
  getAsignacion(id: number) {
    this.aAsignacionService.getAsginacion(id).subscribe(
      asignaciondetail => this.asignaciondetail = asignaciondetail,
      error => this.errorMessage = <any>error);
      
  }
  deleteAsignacion(id: number){
    this.aAsignacionService.deleteAsignacion(id).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/alumnos/asignaciones'])
      },
      error => console.log(error)
    );
  }

}
