import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ScrollService} from "./classes/scroll.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  constructor(private router: Router , private scroll:ScrollService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0,0);
        // this.scroll.scrollToElement(document.getElementById('nav21'));
        // document.getElementById('nav21')?.scrollIntoView({behavior:'smooth'})
      }
    });
  }

  ngOnInit(): void {
      //this.router.navigate(['imigration']);
  }
}

export const slideInFromTop = trigger('slideInFromTop', [
  state('void', style({ transform: 'translateY(-100%)' })),
  transition(':enter', [
    animate('0.5s', style({ transform: 'translateY(0)' }))
  ]),
  transition(':leave', [
    animate('0.5s', style({ transform: 'translateY(-100%)' }))
  ])
]);
