import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonials-item',
  templateUrl: './testimonials-item.component.html',
  styleUrls: ['./testimonials-item.component.css']
})
export class TestimonialsItemComponent {

  @Input() text:string = ""
}
