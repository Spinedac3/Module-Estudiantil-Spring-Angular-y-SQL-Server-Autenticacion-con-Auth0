import { Component, OnInit } from '@angular/core';
import { IAsignacionMaestro } from '../iasignacion-maestro';
import { MasignacionService } from '../masignacion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'at-a-maestros-detail',
  templateUrl: './a-maestros-detail.component.html',
  styleUrls: ['./a-maestros-detail.component.css']
})
export class AMaestrosDetailComponent implements OnInit {
  errorMessage = '';
  asignaciondetail: IAsignacionMaestro | undefined;
  constructor(private mAsignacionService: MasignacionService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getAsignacion(id);
    }
  }

  getAsignacion(id: number) {
    this.mAsignacionService.getAsginacion(id).subscribe(
      asignaciondetail => this.asignaciondetail = asignaciondetail,
      error => this.errorMessage = <any>error);
      
  }
  deleteAsignacion(id: number){
    this.mAsignacionService.deleteAsignacion(id).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/maestros/asignaciones'])
      },
      error => console.log(error)
    );
  }


}
