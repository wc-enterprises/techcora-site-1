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
  }

  closeNav() {
    this.sidenavWidth = 0;
  }
  closeNavAndScroll(sectionId: string): void {
    this.closeNav();

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

// import { Component, Renderer2 } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css'],
// })
// export class NavbarComponent {
//   constructor(private renderer: Renderer2) {}
//   sidenavWidth: number = 0;
//   navbarHeight: number = 50;

//   openNav() {
//     this.sidenavWidth = 250;
//     console.log('Side nav opened. sidenavWidth:', this.sidenavWidth);

//     // Disable scrolling and prevent interaction with content
//     this.renderer.setStyle(document.body, 'overflow', 'hidden');
//   }

//   closeNav() {
//     this.sidenavWidth = 0;

//     // Enable scrolling and allow interaction with content
//     this.renderer.removeStyle(document.body, 'overflow');
//   }

//   closeNavAndScroll(sectionId: string): void {
//     this.closeNav();

//     // Scroll to the target section
//     const element = document.getElementById(sectionId);
//     if (element) {
//       this.renderer.setProperty(
//         document.documentElement,
//         'scrollTop',
//         element.offsetTop - this.navbarHeight
//       );
//     }
//   }
// }
