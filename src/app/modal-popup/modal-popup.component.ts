import { Component,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent {

  @Input() public isResponseReceived =false;
  @Input() public title:string = "";
  @Input() public response:string = "";

  constructor(private router:Router,
    private route: ActivatedRoute,
    ){}

  public reset():void{
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['./'], {
      relativeTo: this.route,
      queryParamsHandling: "merge"
    })
  }

}
