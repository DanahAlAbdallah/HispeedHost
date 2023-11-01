import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forth-row',
  templateUrl: './forth-row.component.html',
  styleUrls: ['./forth-row.component.css']
})
export class ForthRowComponent {

  myForm: FormGroup;
  @Input() formFields?: FourRowData;
  @Input() isSomethingEmpty:boolean = false;
  @Input() isCheckFirstTime = false;
  @Input() isShowScholar:boolean = false
  @Input() checkBoxTextDesc : string = ""
  @Input() checkBoxTextError: string = ""
  @Input() countries:string[] = []

  @Output() fourthRowData = new EventEmitter<FourRowData>

  constructor(private fb: UntypedFormBuilder) { 
    this.myForm  = this.fb.group({
      desiredCountry: ['',Validators.required],
      doYouHaveScholar: [0,Validators.required]

    });
  }

  public items21: { label: string, checked: boolean }[] = [
    { label: 'Yes', checked: false },
    { label: 'No', checked: false }
  ];



  onFieldChange(fieldName: string, value: string|boolean) {
    this.formFields![fieldName] = value
    this.fourthRowData.emit(this.formFields);
  }

  public handleCheckboxChange3(selectedItem: { label: string, checked: boolean }): void {
    this.onFieldChange('temp',true)
    this.isCheckFirstTime =false
    this.items21.forEach(item => {
      item.checked = item === selectedItem;
      if(item.checked){
        if(item.label === "Yes"){
          this.formFields!.doYouHaveScholar = true;
        }
        else if(item.label === "No"){
          this.formFields!.doYouHaveScholar = false;
        }
      }
    });
  }
}

export class FourRowData {
    desiredCountry: string = '';
    doYouHaveScholar:boolean = false;
    temp:boolean = false;

    [key: string]: string | undefined  | boolean;
}


