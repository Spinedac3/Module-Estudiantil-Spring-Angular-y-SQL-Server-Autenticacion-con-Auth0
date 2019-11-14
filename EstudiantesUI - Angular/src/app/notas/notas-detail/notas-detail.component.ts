import { Component, OnInit } from '@angular/core';
import { INota } from '../nota';
import { NotasService } from '../notas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'at-notas-detail',
  templateUrl: './notas-detail.component.html',
  styleUrls: ['./notas-detail.component.css']
})
export class NotasDetailComponent implements OnInit {
  public notaReg;
  constructor(private notaService: NotasService, private route: ActivatedRoute) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
        const id = +param;
        this.getNota(id);

    }
  }

  getNota(id: number) {
    this.notaService.getNota(id).subscribe(
        data =>{
          this.notaReg = data;
          console.log(this.notaReg);
        },
        err => console.log(err),
        () => console.log('nota loaded')

    );
      
  }

}
