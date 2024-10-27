// smooth-scroll.directive.ts
import { Directive, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Directive({
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    const targetElementId = (event.target as HTMLAnchorElement).hash.slice(1);
    this.router.navigate([], { fragment: targetElementId });

    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(targetElementId);
    }, 0);
  }
}
