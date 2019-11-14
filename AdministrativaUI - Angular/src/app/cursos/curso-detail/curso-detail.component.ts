import { Component, OnInit } from '@angular/core';
import { ICurso } from '../curso';
import { CursoService } from '../curso.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'at-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {
  errorMessage = '';
  cursodetail: ICurso | undefined;
  constructor(private cursoService: CursoService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getCurso(id);
    }
  }
  getCurso(id: number) {
    this.cursoService.getCurso(id).subscribe(
      cursodetail => this.cursodetail = cursodetail,
      error => this.errorMessage = <any>error);
      
  }
  deleteCurso(id: number){
    this.cursoService.deleteCurso(id).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/cursos'])
      },
      error => console.log(error)
    );
  }

}
