import { Component, OnInit } from '@angular/core';
import { INota } from './nota';
import { NotasService } from './notas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'at-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  public pageTitle = 'Lista de Usuarios';
  public id: number;
  constructor() { }
  
  


  ngOnInit() {
    
  }

}
