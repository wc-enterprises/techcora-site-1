import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scrollColorChange]',
})
export class ScrollColorChange {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPostion = window.scrollY;
    const header = this.el.nativeElement;

    if (scrollPostion >= window.innerHeight * 0.05) {
      this.renderer.addClass(header, 'add-background-color');
    } else {
      this.renderer.removeClass(header, 'add-background-color');
    }
  }
}
