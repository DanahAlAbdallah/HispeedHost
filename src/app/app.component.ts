import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ScrollService} from "./classes/scroll.service";
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  // constructor(private router: Router , private scroll:ScrollService) {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       window.scrollTo(0,0);
  //       // this.scroll.scrollToElement(document.getElementById('nav21'));
  //       // document.getElementById('nav21')?.scrollIntoView({behavior:'smooth'})
  //     }
  //   });
  // }

  private currentSection: any;


  constructor(private router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
       // this.animateSections();
      }
    });
  }


 

}
