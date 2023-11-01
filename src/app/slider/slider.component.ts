import { Component } from '@angular/core';
import { ScrollService } from '../classes/scroll.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  constructor(private scrollService: ScrollService) { }


  scrollToY(){

    this.scrollService.scrollToElement(document.getElementById('services'));
  }
}
