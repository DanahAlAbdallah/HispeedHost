import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  @Input() title:string = "";
  @Input() link:string = "";
  @Input() description:string ="";

  constructor(private router: Router) {}

  navigateToSearch() {
      this.router.navigateByUrl(this.link ).finally(() => {
        setTimeout(
          ()=>{window.scrollTo(0,0);},
          20
        )
      });
  }

}
