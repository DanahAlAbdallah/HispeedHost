import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImigrationService } from '../classes/imigration.service';
import { AfterSearch } from '../classes/afterseatch';

@Component({
  selector: 'app-all-hr-search',
  templateUrl: './all-hr-search.component.html',
  styleUrls: ['./all-hr-search.component.css']
})
export class AllHrSearchComponent {
  public message:string = "";

  @Output() newItemEvent = new EventEmitter<boolean>();
  isEmpty:boolean = false;

  public Items:AfterSearch[] = [];

  constructor(private router: Router,private route: ActivatedRoute, private service:ImigrationService) {

  }
  

  goBack() {
    // Use the router to navigate back to a previous page or location
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

