import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, UntypedFormBuilder, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-five-row',
  templateUrl: './five-row.component.html',
  styleUrls: ['./five-row.component.css']
})
export class FiveRowComponent implements OnChanges {

  myForm: FormGroup;
  @Input() formFields?: RowFive;
  @Input() isSomethingEmpty: boolean = false;
  @Input() notHideVisaStatus: boolean = true;
  @Output() RowFiveData = new EventEmitter<RowFive>
  @Output() isEVSOpend = new EventEmitter<boolean>

  public items = [
    { label: 'Work', value: 'Work', checked: false },
    { label: 'Permanent Resident', value: 'Permanent Resident', checked: false },
    { label: 'Student', value: 'Student', checked: false },
    { label: 'Temporary Resident', value: 'Temporary Resident', checked: false },
    { label: 'Other', value: 'Other', checked: false },
  ];

  onFieldChange(fieldName: string, value: string) {
    this.formFields![fieldName] = value;
    console.log(this.RowFiveData);

    this.RowFiveData.emit(this.formFields);
  }

  constructor(private fb: UntypedFormBuilder) { 
    this.myForm  = this.fb.group({
      status:  ['',Validators.required],
      explain: ['',Validators.required],
    });

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("wroo")
    if (changes['notHideVisaStatus'] && changes['notHideVisaStatus'].currentValue == false) {
      const currentValue = changes['notHideVisaStatus'].currentValue;
      if (currentValue == false) {
        this.onFieldChange('status', '')
      }
    }
  }

  hideEVSInput:boolean = false;
  public isOtherVisaStatus = false;

  public handleCheckboxChange1(selectedItem: { label: string,value:string, checked: boolean }): void {
    this.items.forEach(item => {

      item.checked = item === selectedItem; // Set the selected property based on the clicked checkbox
      if(item.checked){
        if(item.value != "Other"){
          this.hideEVSInput = false;
          this.isOtherVisaStatus = true;
          this.formFields!.explain = "disabled"
          this.onFieldChange("status", item.value)
          this.isEVSOpend.emit(this.hideEVSInput)

        }else{
          this.isOtherVisaStatus = false;
          this.formFields!.explain = ""
          this.hideEVSInput = true;
          this.onFieldChange("status", item.value)
          this.isEVSOpend.emit(this.hideEVSInput)
        }
        this.formFields!.status = item.value;
      }
    });
  }
}

export class RowFive{
  status: string = '';
  explain: string = '';

  [key: string]: string | undefined;
}
