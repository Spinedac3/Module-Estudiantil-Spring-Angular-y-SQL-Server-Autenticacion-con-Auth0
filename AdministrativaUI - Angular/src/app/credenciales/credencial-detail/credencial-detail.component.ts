import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CredencialesService } from '../credenciales.service';
import { ICredenciales } from '../credenciales';

@Component({
  selector: 'at-credencial-detail',
  templateUrl: './credencial-detail.component.html',
  styleUrls: ['./credencial-detail.component.css']
})
export class CredencialDetailComponent implements OnInit {
  errorMessage = '';
  credencialdetail: ICredenciales | undefined;
  constructor(private credencialesService: CredencialesService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getUser(id);
    }
  }

  getUser(id: number) {
    this.credencialesService.getUser(id).subscribe(
      credencialdetail => this.credencialdetail = credencialdetail,
      error => this.errorMessage = <any>error);
      
  }

  deleteCredencial(id: number){
    this.credencialesService.deleteCredencial(id).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/credenciales'])
      },
      error => console.log(error)
    );
  }
}
