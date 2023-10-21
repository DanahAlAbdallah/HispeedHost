import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isNavbarScrolled: boolean = false;
  isIconLight: boolean = false;
  isScrolling: boolean = false;
  public isNavItemSelected: boolean = false;
  isNavSidebarOpen: boolean = false;
  scrollThreshold = 10;
  imageSource: string = './assets/icon-general.png';

  activeLink: string = ''; // Variable to track the active link


  @Input() iconLightHome = false;
  @Input() navItemsHome = false;
  @Input() whichNavItems = "Home";

  setActiveLink(link: string) {
    this.activeLink = link;
  }

  @ViewChild('blbla', { static: false }) navSidebar!: ElementRef;
  

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavbarScrolled = window.pageYOffset > this.scrollThreshold;
    this.isIconLight = this.isNavbarScrolled;
    this.imageSource = this.isNavbarScrolled || this.iconLightHome ? './assets/icon-general-white.png' : './assets/icon-general.png';
    this.isScrolling = true;

  }

  @HostListener('window:wheel', [])
  onWindowWheel() {
    // Toggle the scrolling state
    this.isScrolling = true;
  }

  @HostListener('window:click', [])
  onWindowClick() {
    // Reset the scrolling state
    this.isScrolling = true;
  }


  setNavItemColor(isLight: boolean) {
    this.isNavItemSelected = isLight;
  }
 

  toggleNavSidebar() {
    this.isNavSidebarOpen = !this.isNavSidebarOpen;
  }

  setNavItemColorAndClose(isLight: boolean) {
    this.isNavItemSelected = isLight;
    this.isNavSidebarOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const element = this.elementRef.nativeElement.querySelector('.nav-sidebar');
    const button = this.elementRef.nativeElement.querySelector('.buttonTog');

    if (element && !element.contains(event.target) && !button.contains(event.target) && this.isNavSidebarOpen) {
      this.isNavSidebarOpen = false;

    }


  }

  
  // Attach the click event listener to the entire document
  ngOnInit() {
    this.imageSource = this.isNavbarScrolled || this.iconLightHome ? './assets/icon-general-white.png' : './assets/icon-general.png';

    this.renderer.listen('document', 'click', (event: Event) => {
      this.onDocumentClick(event as MouseEvent);
    });
  }

  
}
