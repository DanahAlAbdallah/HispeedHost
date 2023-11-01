import { Component } from '@angular/core';

@Component({
  selector: 'app-whoweare',
  templateUrl: './whoweare.component.html',
  styleUrls: ['./whoweare.component.css']
})
export class WhoweareComponent {


  icons:string[] = [
    './assets/star-whoweare.png',
    './assets/world-whoweare.png',
    './assets/like-whoweare.png'
  ]

  titles:string[] = [
    'Handpicked Hotel',
    'World Class Service',
    'Best Price Guarantee'
  ]

  description: string[] = [
    "Explore Handpicked Hotels: Where you'll find the perfect blend of comfort, cultural immersion, and unforgettable experiences.",
    'Experience world-class travel service with us. Personalized, exceptional, and unforgettable journeys await.',
    'Embrace Our Unbeatable Best Price Guarantee: Your gateway to affordable and unforgettable journeys.',
    ]
}
