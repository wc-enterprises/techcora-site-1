// import { Component, Renderer2 } from '@angular/core';
// import { EventEmitter, Output } from '@angular/core';
// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.css',
// })
// export class NavbarComponent {
//   constructor(private renderer: Renderer2) {}
//   sidenavWidth: number = 0;

//   navbarHeight: number = 50;

//   openNav() {
//     this.sidenavWidth = 250;
//   }

//   closeNav() {
//     this.sidenavWidth = 0;
//   }

//   closeNavAndScroll(sectionId: string): void {
//     this.closeNav();

//     const element = document.getElementById(sectionId);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - this.navbarHeight,
//         behavior: 'smooth',
//       });
//     }
//   }
// }

// import { Component, HostListener, Renderer2 } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css'],
// })
// export class NavbarComponent {
//   sidenavWidth: number = 0;

//   constructor(private renderer: Renderer2) {}

//   @HostListener('window:scroll', ['$event'])
//   onWindowScroll(event: Event): void {
//     // Prevent scroll when the side navbar is open
//     if (this.sidenavWidth > 0) {
//       window.scrollTo(0, 0);
//     }
//   }

//   openNav(): void {
//     this.sidenavWidth = 250;
//     this.disableScroll();
//   }

//   closeNav(): void {
//     this.sidenavWidth = 0;
//     this.enableScroll();
//   }

//   closeNavAndScroll(sectionId: string): void {
//     this.closeNav();

//     const element = document.getElementById(sectionId);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop,
//         behavior: 'smooth',
//       });
//     }
//   }

//   private disableScroll(): void {
//     this.renderer.setStyle(document.body, 'overflow', 'hidden');
//   }

//   private enableScroll(): void {
//     this.renderer.removeStyle(document.body, 'overflow');
//   }
// }

import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  sidenavWidth: number = 0;
  navbarHeight: number = 50;
  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    // Prevent scroll when the side navbar is open
    if (this.sidenavWidth > 0) {
      window.scrollTo(0, 0);
    }
  }

  openNav(): void {
    this.sidenavWidth = 250;
    this.disableScroll();
  }

  closeNav(): void {
    this.sidenavWidth = 0;
    this.enableScroll();
  }

  closeNavAndScroll(sectionId: string): void {
    this.closeNav();

    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - this.navbarHeight,
        behavior: 'smooth',
      });
    }
  }

  private disableScroll(): void {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  private enableScroll(): void {
    this.renderer.removeStyle(document.body, 'overflow');
  }
}

// closeNavAndScroll(sectionId: string): void {
//   this.closeNav();

//   const element = document.getElementById(sectionId);
//   if (element) {
//     this.renderer.setProperty(
//       document.documentElement,
//       'scrollTop',
//       element.offsetTop - this.navbarHeight
//     );
//   }
// }

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
