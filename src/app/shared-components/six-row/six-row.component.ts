import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ThirdRow } from '../third-row/third-row.component';

@Component({
  selector: 'app-six-row',
  templateUrl: './six-row.component.html',
  styleUrls: ['./six-row.component.css']
})
export class SixRowComponent {

  myForm: FormGroup;
  @Input() formFields?: RowSix;
  @Input() isSomethingEmpty:boolean = false;
  @Input() isCheckFirstTime = true;
  @Output() sixRowData = new EventEmitter<RowSix>
  @Output() isHoldQualificationOpend = new EventEmitter<boolean>


  isListTypeOfQualification: boolean = false;
  
  public items21: { label: string, checked: boolean }[] = [
    { label: 'Yes', checked: false },
    { label: 'No', checked: false }
  ];


  public handleCheckboxChange3(selectedItem: { label: string, checked: boolean }): void {
    this.onFieldChange('temp',true)
    this.isCheckFirstTime =false
    this.items21.forEach(item => {
      item.checked = item === selectedItem;
      if(item.checked){
        if(item.label === "Yes"){
          this.formFields!.listTypeOfQualification=""

          this.formFields!.holdQualification = true;
          this.isListTypeOfQualification = true;
          this.isHoldQualificationOpend.emit(this.isListTypeOfQualification)
          this.onFieldChange("holdQualification", true)
        }
        else if(item.label === "No"){
          this.formFields!.holdQualification = false;
          this.isListTypeOfQualification = false;
          this.isHoldQualificationOpend.emit(this.isListTypeOfQualification);
          this.formFields!.listTypeOfQualification="No list"
          this.onFieldChange("holdQualification", false);
          
        }
      }
    });
  }

  constructor(private fb: UntypedFormBuilder) { 
    this.myForm  = this.fb.group({
      listTypeOfQualification: ['',Validators.required],
      holdQualification: ['',Validators.required]
    });
  }


  onFieldChange(fieldName: string, value: string|boolean) {
    this.formFields![fieldName] = value
    this.sixRowData.emit(this.formFields);
  }
}

export class RowSix {
    holdQualification:boolean = false;
    listTypeOfQualification:string = "";

    [key: string]: undefined| string | boolean;
}

