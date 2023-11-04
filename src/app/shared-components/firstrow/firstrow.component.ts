import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { DateUtils } from 'src/app/classes/dateutils';
import { ImigrationService } from 'src/app/classes/imigration.service';

@Component({
  selector: 'app-firstrow',
  templateUrl: './firstrow.component.html',
  styleUrls: ['./firstrow.component.css']
})
export class FirstrowComponent implements OnInit {

  myForm: FormGroup;
  @Input() formFields?: FirstRow;
  @Input() isSomethingEmpty:boolean = false;
  @Output() firstRowData = new EventEmitter<FirstRow>

  countries :any[] = []

  days:any[] = []
  months:any[] = []
  years:number[] = []


  constructor(private fb: UntypedFormBuilder, private service_country:ImigrationService) {
    this.myForm  = this.fb.group({
      fullName: ['',Validators.required],
      day: ['',Validators.required],
      month: ['',Validators.required],
      year: ['',Validators.required ],

      passportCountry:['',Validators.required],
      currentResidence:['',Validators.required],
      gender: ['',Validators.required]
    });
  }


  ngOnInit(): void {
    this.getCountries()
    this.days = DateUtils.getDays();
    this.months = DateUtils.getMonthsArray();
    const currentYear = new Date().getFullYear();
    this.years = DateUtils.getYearsArray().filter((year) => (currentYear - year) > 18)
  }


  onFieldChange(fieldName: string, value: string) {
    this.formFields![fieldName] = value
    this.firstRowData.emit(this.formFields);
  }



  public getCountries(){
    this.service_country.loadCurrentResidenceCountries().subscribe({
        next: (v:any) => {
          this.countries =
           v.filter((c:any) => c.name.common !== 'Israel')
           .sort((a:any, b:any) => a.name.common >= b.name.common ? 1 : -1);
        },
        error: (e) => {console.log(e)},
        complete: () =>{console.log("is complete")}
    });
  }

}

export class FirstRow {
    fullName: string = '';
    day: string = '';
    month: string = '';
    year: string = '';
    passportCountry: string = '';
    currentResidence: string = '';
    gender: string = '';

    [key: string]: string | undefined;
}


