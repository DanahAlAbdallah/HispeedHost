import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  @Input() title:string = "";
  @Input() link:string = "";
  @Input() description:string ="";


  
}
