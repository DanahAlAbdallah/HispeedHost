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
  isPageLoad:boolean = false

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


  page = 0; // Current page number
  pageSize = 30; // Number of items to load per page
  isLoadingMore = false; 
  showMoreButton = false;

  ngOnInit(): void {

    this.isPageLoad = true;
    this.loadMoreItems()
      
  }

      displayedItems: any[] = []; 

      message1:string = "";
      showMessage1:boolean = false;
      showButton:boolean = false;

      loadMoreItems(): void {

        this.showMessage1 = false;
        this.showMoreButton = this.Items.length > this.displayedItems.length;

        if (!this.isLoadingMore) {
          this.isLoadingMore = true;
          this.showButton = false;

          // Increment the page number
          this.page++;
    
          // Fetch more items based on the page number and page size
          this.service.getAllHrResults(this.page, this.pageSize).subscribe({
            next: (res) => {
              if (res.length > 0) {
                this.Items = [...this.Items, ...res];
                this.isEmpty = false;
              } else {
                this.showMessage1 = true;
                this.message1 = "No more data available.";
                this.showButton = false;
              }
            },
            error: (error) => {
              this.showMessage1 = true;
              this.message1 = "Error fetching more data.";
              this.showButton = true;
              this.isPageLoad = false;

            },
            complete: () => {
              this.isLoadingMore = false;
              this.showButton = true;
              this.isPageLoad = false;
            },
          });

          console.log(this.showButton)
        }
    }
}

