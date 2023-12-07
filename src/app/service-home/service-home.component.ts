import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-home',
  templateUrl: './service-home.component.html',
  styleUrls: ['./service-home.component.css']
})
export class ServiceHomeComponent {

  @Input() imgUrl:string = "";
  @Input() title:string = "";
  @Input() desc:string = "";
  @Input() _routelink:string = "";

  constructor(private route:Router){

  }

  navigateToSearch() {
    this.route.navigateByUrl(this._routelink ).then(() => {
      setTimeout(
        ()=>{window.scrollTo(0,0);},
        25
      )
    });
  }
  public navigate(){
    this.route.navigate([this._routelink]).then(() => window.scrollTo(0,0));
  }
}
