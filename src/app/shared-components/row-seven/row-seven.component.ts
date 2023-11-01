import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-row-seven',
  templateUrl: './row-seven.component.html',
  styleUrls: ['./row-seven.component.css']
})
export class RowSevenComponent {
  myForm: FormGroup;
  @Input() formFields?: RowSeven;
  @Input() isSomethingEmpty: boolean = false;
  @Output() RowSevehData = new EventEmitter<RowSeven>

  selectedExam: { label: string, value: string } | null = null;

  public exams = [
    {label: 'IELTS', value: 'IELTS', checked: false},
    {label: 'TOEFL', value: 'TOEFL', checked: false},
    {label: 'TOEIC ', value: 'TOEIC ', checked: false},
    {label: 'CLEPIP', value: 'CLEPIP', checked: false},
    {label: 'DELF', value: 'DELF', checked: false},
    {label: 'DALF', value: 'DALF', checked: false},
    {label: 'TEF', value: 'TEF', checked: false},
    {label: 'TCF', value: 'TCF', checked: false},
    {label: 'SAT', value: 'SAT', checked: false},
    {label: 'duo lingo test english', value: 'duo lingo test english', checked: false},

  ];

  onFieldChange(fieldName: string, value: string) {
    this.formFields![fieldName] = value;
    this.RowSevehData.emit(this.formFields);
  }

  constructor(private fb: UntypedFormBuilder) {
    this.myForm = this.fb.group({
      exam: ['', Validators.required],
      degree: ['', Validators.required],
      certificate: ['']
    });

  }

  hideEVSInput: boolean = false;
  public isOtherVisaStatus = false;

  selectedCheckboxIndex: number = -1;

  public handleCheckboxChange1(index: number): void {
    if (index === this.selectedCheckboxIndex) {
      // Prevent unchecking the currently selected checkbox
      return;
    }

    this.selectedCheckboxIndex = index;

    this.onFieldChange("exam", this.exams[index].value);
  }

  selectedFile?: File | null;
  selectedFileName: string | null = null;
  @Output() cv_file = new EventEmitter<File>

  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedFile = inputElement.files ? inputElement.files[0] : null;

    if (this.selectedFile) {
      this.selectedFileName = this.selectedFile.name;
      this.myForm.patchValue({"filename":this.selectedFileName})
      this.onFieldChange('file_name',this.selectedFileName)
      this.cv_file.emit(this.selectedFile)
    } else {
      this.selectedFileName = null;
    }
  }
}

export class RowSeven{
  exam: string = '';
  degree:string = '';
  filename:string = '';
  [key: string]: string | undefined;
}

