import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { AfterSearch } from '../classes/afterseatch';
import { ActivatedRoute } from '@angular/router';
import { ImmigrationHrRequest } from '../classes/ImmigrationHrRequest';
import { ImigrationService } from '../classes/imigration.service';

@Component({
  selector: 'app-aftersearch',
  templateUrl: './aftersearch.component.html',
  styleUrls: ['./aftersearch.component.css']
})
export class AftersearchComponent implements OnInit {

  public message:string = "";

  @Output() newItemEvent = new EventEmitter<boolean>();

  requestHr:ImmigrationHrRequest;
  isEmpty:boolean = false;

  public Items:AfterSearch[] = [];

  constructor(private route: ActivatedRoute, private service:ImigrationService) {
    this.requestHr = new ImmigrationHrRequest();

  }

  temp:any[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.requestHr.profession = params['profession'];
      this.requestHr.yearOfExp = params['yearsexp'];
      this.requestHr.education= params['degree'];
      this.requestHr.gender = params['gender'];
      

      if(this.requestHr.profession !== undefined){
        this.service.getHrResultsWithSpecificCondition(this.requestHr).subscribe({
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
     

    });

  }



}
