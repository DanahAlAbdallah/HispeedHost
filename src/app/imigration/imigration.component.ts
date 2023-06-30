import { ChangeDetectorRef, Component } from '@angular/core';
import { ImmigrationData } from '../classes/Immigration';
import { ActivatedRoute, Router } from '@angular/router';
import { ImigrationService } from '../classes/imigration.service';

@Component({
  selector: 'app-imigration',
  templateUrl: './imigration.component.html',
  styleUrls: ['./imigration.component.css']
})
export class ImigrationComponent {

  public imigration:ImmigrationData;

  public isSomethingEmpty:boolean = false;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private service:ImigrationService
    ){
      this.imigration = new ImmigrationData();
  }

  public items = [
    { label: 'Work', value: 'Work', checked: false },
    { label: 'Permanent Resident', value: 'Permanent Resident', checked: false },
    { label: 'Student', value: 'Student', checked: false },
    { label: 'Temporary Resident', value: 'Temporary Resident', checked: false },
    { label: 'Other', value: 'Other', checked: false },

  ];

  public items2: { label: string, checked: boolean }[] = [
    { label: 'Yes', checked: false },
    { label: 'No', checked: false },
    // Add more items as needed
  ];

  public items21: { label: string, checked: boolean }[] = [
    { label: 'Yes', checked: false },
    { label: 'No', checked: false },
    // Add more items as needed
  ];

  public items22: { label: string, checked: boolean }[] = [
    { label: 'Yes', checked: false },
    { label: 'No', checked: false },
    // Add more items as needed
  ];
  
  public items3: { label: string, checked: boolean }[] = [
    { label: 'excellent', checked: false },
    { label: 'Very good', checked: false },
    { label: 'Good', checked: false },
    { label: 'Moderate', checked: false },
    { label: 'Low', checked: false },
    { label: 'Very low', checked: false }
  ];


  public handleCheckboxChange(selectedItem: { label: string, checked: boolean }): void {
    this.items3.forEach(item => {
      item.checked = item === selectedItem; // Set the selected property based on the clicked checkbox
      if(item.checked){
        this.imigration.englishProficiency = item.label;
      }
    });
  }
  
 
  public handleCheckboxChange1(selectedItem: { label: string,value:string, checked: boolean }): void {
    this.items.forEach(item => {
      item.checked = item === selectedItem; // Set the selected property based on the clicked checkbox
      if(item.checked){
        this.imigration.visaStatus = item.value;
      }
    });
  }
  

  public handleCheckboxChange2(selectedItem: { label: string, checked: boolean }): void {
    this.items2.forEach(item => {
      item.checked = item === selectedItem; // Set the selected property based on the clicked checkbox
      if(item.checked){
        if(item.label == "Yes"){
          this.imigration.holdQualification = true;
        }
        else{
          this.imigration.holdQualification = false;
        }
      }
    });
  }


  public handleCheckboxChange3(selectedItem: { label: string, checked: boolean }): void {
    this.items21.forEach(item => {
      item.checked = item === selectedItem; // Set the selected property based on the clicked checkbox
      if(item.checked){
        if(item.label == "Yes"){
          this.imigration.isCompleteEngishTest = true;
          console.log(this.imigration.isCompleteEngishTest)
        }
        else{
          this.imigration.isCompleteEngishTest = false;
          console.log(item.label)

        }
      }
    });
  }

  public handleCheckboxChange4(selectedItem: { label: string, checked: boolean }): void {
    this.items22.forEach(item => {
      item.checked = item === selectedItem; // Set the selected property based on the clicked checkbox
      if(item.checked){
        if(item.label == "Yes"){
          this.imigration.doYouHaveOffer = true;
        }
        else{
          this.imigration.doYouHaveOffer = false;
        }
      }
    });
  }

  public submit():void{

    if (!this.imigration.FullName ||
      !this.imigration.dateofbirth ||
      !this.imigration.explainVisaStatus ||
      !this.imigration.listTypeOfQualification ||
      !this.imigration.visaStatus||
      !this.imigration.englishProficiency) {
      this.isSomethingEmpty = true;
    return;
  }

    //call service methode to send data

    this.service.addImigration(this.imigration).subscribe(
      response => console.log(response) 
    );

    console.log(this.imigration);

  //  this.reset();


  }


  private reset():void{
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['./'], {
      relativeTo: this.route,
      queryParamsHandling: "merge"
    })
  }
}
