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
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    ]
}
