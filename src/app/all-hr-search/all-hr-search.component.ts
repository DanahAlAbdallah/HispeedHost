import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ImigrationService } from '../classes/imigration.service';
import {AfterSearch, AfterSearch1} from '../classes/afterseatch';

@Component({
  selector: 'app-all-hr-search',
  templateUrl: './all-hr-search.component.html',
  styleUrls: ['./all-hr-search.component.css']
})
export class AllHrSearchComponent {
  public message:string = "";
  isHrPage= true;
  @Output() newItemEvent = new EventEmitter<boolean>();
  isEmpty:boolean = false;

  public Items:AfterSearch1 [] = [];

  constructor(private router: Router,private route: ActivatedRoute, private service:ImigrationService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
         //scroll to top
         window.scrollTo(0,0);
      }
    });
  }


  goBack() {
    this.router.navigate(['/search']);
  }
  temp:any[] = [];

  ngOnInit(): void {

    this.service.getAllHrResults().subscribe({
          next: (res) => {
            this.Items = res
            if(res.length !== 0){
              this.isEmpty = false;
              this.newItemEvent.emit(false);
            }else{
                this.isEmpty = true;
                this.message = "No Data With this Specifications.";
                console.log("")
                this.newItemEvent.emit(false);

            }


          },
          error: (error) => {
            this.isEmpty = true;
            this.message = "Something Wrong, Please Try Again.";
            this.newItemEvent.emit(false);

          },
          complete: () => {}
      });
      }


}

