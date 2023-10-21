import { Component } from '@angular/core';

@Component({
  selector: 'app-spcial-package',
  templateUrl: './spcial-package.component.html',
  styleUrls: ['./spcial-package.component.css']
})
export class SpcialPackageComponent {


  photos:string[] = [
    './assets/turkey-package.png',
    './assets/france-package.png'
  ]

  countries:string[] = [
    'TURKEY',
    'FRANCE'
  ]
}
