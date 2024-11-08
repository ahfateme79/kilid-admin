import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarMenus } from '../../../core/consts/navbar-items.const';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navbarItems = NavbarMenus;
  menuOpen = false;

  constructor() {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen; 
  }
}
