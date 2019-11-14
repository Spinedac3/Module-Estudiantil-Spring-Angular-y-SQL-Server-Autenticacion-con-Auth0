import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {MenuItem} from "primeng/primeng";
import {Menu} from "primeng/components/menu/menu";
import {ActivatedRoute, Router} from "@angular/router";
import { AuthService } from './callback/auth.service';

declare var jQuery :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  menuItems: MenuItem[];
  miniMenuItems: MenuItem[];

  @ViewChild('bigMenu') bigMenu : Menu;
  @ViewChild('smallMenu') smallMenu : Menu;

  constructor(private router : Router, private authService: AuthService) {
    authService.handleAuthentication();
  }

  ngOnInit() {

    let handleSelected = function(event) {
      let allMenus = jQuery(event.originalEvent.target).closest('ul');
      let allLinks = allMenus.find('.menu-selected');

      allLinks.removeClass("menu-selected");
      let selected = jQuery(event.originalEvent.target).closest('a');
      selected.addClass('menu-selected');
    }

    this.menuItems = [
      {label: 'Usuarios', icon: 'fa fa fa-users', routerLink: ['/usuarios'], command: (event) => handleSelected(event)},
      {label: 'Credenciales', icon: 'fa fa-address-card', routerLink: ['/credenciales'], command: (event) => handleSelected(event)},
      {label: 'Cursos', icon: 'fa fa-book', routerLink: ['/cursos'], command: (event) => handleSelected(event)},
      {label: 'Asignar Maestros', icon: 'fa fa-user-plus', routerLink: ['/maestros/asignaciones'], command: (event) => handleSelected(event)},
      {label: 'Asignar Alumnos', icon: 'fa fa-user-plus', routerLink: ['/alumnos/asignaciones'], command: (event) => handleSelected(event)}
    ]

    this.miniMenuItems = [];
    this.menuItems.forEach( (item : MenuItem) => {
      let miniItem = { icon: item.icon, routerLink: item.routerLink }
      this.miniMenuItems.push(miniItem);
    })

  }

  selectInitialMenuItemBasedOnUrl() {
    let path = document.location.pathname;
    let menuItem = this.menuItems.find( (item) => { return item.routerLink[0] == path });
    if (menuItem) {
      let iconToFind = '.' + menuItem.icon.replace('fa ', ''); // make fa fa-home into .fa-home
      let selectedIcon = document.querySelector(`${iconToFind}`);
      jQuery(selectedIcon).closest('li').addClass('menu-selected');
    }
  }

  ngAfterViewInit() {
    this.selectInitialMenuItemBasedOnUrl();
  }



}
