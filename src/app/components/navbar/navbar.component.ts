import { Component } from '@angular/core';
import { ScreenOnUseDirective } from '../../directives/screen-on-use.directive';
import { HideOnMobileDirective } from '../../directives/hide-on-mobile.directive';
import { HideOnDesktopDirective } from '../../directives/hide-on-desktop.directive';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ScreenOnUseDirective,
    HideOnMobileDirective,
    HideOnDesktopDirective,
    NgClass,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  img_logo = 'assets/logo.jpg';
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
