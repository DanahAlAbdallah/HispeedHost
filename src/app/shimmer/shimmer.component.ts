import { Component,Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-shimmer',
  templateUrl: './shimmer.component.html',
  styleUrls: ['./shimmer.component.css'],
  animations: [
    trigger('shimmerTrigger', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* <=> *', animate('500ms ease-in-out')),
    ]),
  ],
})
export class ShimmerComponent {

  shimmerState: string = 'visible';

  ngOnInit() {
    // Simulate content loading
    setTimeout(() => {
      this.shimmerState = 'hidden';
    }, 10000); // Set the delay to control how long the shimmer animation is visible
  }
}
