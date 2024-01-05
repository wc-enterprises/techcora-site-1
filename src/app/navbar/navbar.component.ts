import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private renderer: Renderer2) {}
  sidenavWidth: number = 0;

  navbarHeight: number = 50;
  openNav() {
    this.sidenavWidth = 250;
    console.log('Side nav opened. sidenavWidth:', this.sidenavWidth);
  }

  closeNav() {
    this.sidenavWidth = 0;
  }
  closeNavAndScroll(sectionId: string): void {
    this.closeNav();

    // Scroll to the target section
    const element = document.getElementById(sectionId);
    if (element) {
      this.renderer.setProperty(
        document.documentElement,
        'scrollTop',
        element.offsetTop - this.navbarHeight
      );
    }
  }
}
