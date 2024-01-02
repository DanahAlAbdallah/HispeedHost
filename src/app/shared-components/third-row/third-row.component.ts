import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-third-row',
  templateUrl: './third-row.component.html',
  styleUrls: ['./third-row.component.css']
})
export class ThirdRowComponent {
  myForm: FormGroup;
  @Input() formFields?: ThirdRow;
  @Input() isSomethingEmpty:boolean = false;
  @Input() isCheckFirstTime = false;
  @Output() thirdRowData = new EventEmitter<ThirdRow>

  @Input() isHideCompleteEnglishTest = false;

  public items21: { label: string, checked: boolean }[] = [
    { label: 'Yes', checked: false },
    { label: 'No', checked: false }
  ];


  public handleCheckboxChange3(selectedItem: { label: string, checked: boolean }): void {
    this.onFieldChange('temp',true)
    this.isCheckFirstTime =false
    console.log(this.isCheckFirstTime)
    this.items21.forEach(item => {
      item.checked = item === selectedItem;
      if(item.checked){
        if(item.label === "Yes"){
          this.formFields!.completeEnglishTest = true;
        }
        else if(item.label === "No"){
          this.formFields!.completeEnglishTest = false;
        }
      }
    });
  }

  constructor(private fb: UntypedFormBuilder) {
    this.myForm  = this.fb.group({
      englishproficiency: ['',Validators.required],
      completeenglishtest: [0,Validators.required]
    });
  }


  onFieldChange(fieldName: string, value: string|boolean) {
    this.formFields![fieldName] = value
    this.thirdRowData.emit(this.formFields);
  }
}

export class ThirdRow {
    englishProficiency: string = '';
    completeEnglishTest: boolean = false;
    temp:boolean = false;

    [key: string]: string | undefined  | boolean;
}

