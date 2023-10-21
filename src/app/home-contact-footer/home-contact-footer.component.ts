import { Component } from '@angular/core';
import { ScrollService } from '../classes/scroll.service';

@Component({
  selector: 'app-home-contact-footer',
  templateUrl: './home-contact-footer.component.html',
  styleUrls: ['./home-contact-footer.component.css']
})
export class HomeContactFooterComponent {


  constructor(private scrollService: ScrollService) { }

  scrollPageToTop() {
    this.scrollService.scrollToTop();
  }
}
