import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whowearesection',
  templateUrl: './whowearesection.component.html',
  styleUrls: ['./whowearesection.component.css']
})
export class WhowearesectionComponent {

  @Input() icon:string= ""
  @Input() title:string= ""
  @Input() desc:string= ""

}
