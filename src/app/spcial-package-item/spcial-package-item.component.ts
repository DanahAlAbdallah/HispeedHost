import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spcial-package-item',
  templateUrl: './spcial-package-item.component.html',
  styleUrls: ['./spcial-package-item.component.css']
})
export class SpcialPackageItemComponent {


  @Input() photo:string = ""
  @Input() country:string = ""
}
