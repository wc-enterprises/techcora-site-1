import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  sidenavWidth: number = 0;
  openNav() {
    this.sidenavWidth = 250;
    console.log('Side nav opened. sidenavWidth:', this.sidenavWidth);
  }

  closeNav() {
    this.sidenavWidth = 0;
  }
}
