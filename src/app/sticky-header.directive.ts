import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStickyHeader]'
})
export class StickyHeaderDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > 10) {
      this.renderer.addClass(this.el.nativeElement, 'sticky');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'sticky');
    }
  }
}
