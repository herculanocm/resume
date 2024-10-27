import { Component, OnInit, Renderer2, ElementRef, OnDestroy } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {

  navbarVisible: boolean = false;
  private bodyClickListener!: () => void;
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  title = 'resume';

  ngOnInit(): void {
    AOS.init({
      // once: true // Uncomment to play animations only once
    });
  }

  ngOnDestroy(): void {
    if (this.bodyClickListener) {
      this.bodyClickListener();
    }
  }

  

  toggleNavbar() {
    this.navbarVisible = !this.navbarVisible;

    if (this.navbarVisible) {
      // Add 'nav-open' class to <html>
      this.renderer.addClass(document.documentElement, 'nav-open');

      // Add 'toggled' class to the toggler button after a delay
      setTimeout(() => {
        const toggleButton = this.elRef.nativeElement.querySelector('.navbar-toggler');
        if (toggleButton) {
          this.renderer.addClass(toggleButton, 'toggled');
        }
      }, 580);

      // Create and append the overlay div (#bodyClick)
      const body = document.body;
      const bodyClickDiv = this.renderer.createElement('div');
      this.renderer.setAttribute(bodyClickDiv, 'id', 'bodyClick');

      // Add click listener to the overlay div to close the navbar
      this.bodyClickListener = this.renderer.listen(bodyClickDiv, 'click', () => {
        this.closeNavbar();
      });

      this.renderer.appendChild(body, bodyClickDiv);
    } else {
      this.closeNavbar();
    }
  }

  closeNavbar() {
    // Remove 'toggled' class from the toggler button after a delay
    setTimeout(() => {
      const toggleButton = this.elRef.nativeElement.querySelector('.navbar-toggler');
      if (toggleButton) {
        this.renderer.removeClass(toggleButton, 'toggled');
      }
    }, 550);

    // Remove 'nav-open' class from <html>
    this.renderer.removeClass(document.documentElement, 'nav-open');

    // Remove the overlay div and its event listener
    const bodyClickDiv = document.getElementById('bodyClick');
    if (bodyClickDiv) {
      this.renderer.removeChild(document.body, bodyClickDiv);
      if (this.bodyClickListener) {
        this.bodyClickListener();
      }
    }

    // Set navbarVisible to false
    this.navbarVisible = false;
  }


}
