import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  scrollToYPosition(yPosition: number) {
    window.scrollTo(0, yPosition);
  }
}