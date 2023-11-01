import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ImigrationService } from 'src/app/classes/imigration.service';

@Component({
  selector: 'app-second-row',
  templateUrl: './second-row.component.html',
  styleUrls: ['./second-row.component.css']
})
export class SecondRowComponent implements OnInit {
  myForm: FormGroup;
  @Input() formFields?: SecondRow;
  @Input() isSomethingEmpty:boolean = false;
  @Output() secondRowData = new EventEmitter<SecondRow>
  @Output() cv_file = new EventEmitter<File>
  @Output() isOtherSelected = new EventEmitter<boolean>


  professions:string[] = []
  years:string[] = []

  selectedFile?: File | null;
  selectedFileName: string | null = null;

  isOtherSelectedVar:boolean = false;

  constructor(private fb: UntypedFormBuilder, private service:ImigrationService) {
    this.myForm  = this.fb.group({
      profession: ['',Validators.required],
      yearofexperience: ['',Validators.required],
      education: ['',Validators.required],
      filename: ['', Validators.required],
      other: ['',Validators.required]

    });
  }
  ngOnInit(): void {
    this.service.getAllProfessions().subscribe({
      next: (v:any) => {
        v.forEach((obj:any) => {
          this.professions.push(obj.profession);
        });

      },
      error: (e) => {},
      complete: () =>{}
  });
  }

  onFieldChange(fieldName: string, value: string) {
    this.formFields![fieldName] = value
    this.secondRowData.emit(this.formFields);

    if(fieldName == "profession" && value == "Other"){
      this.isOtherSelectedVar = true;
      this.isOtherSelected.emit(true);
    }
    else{
      this.isOtherSelectedVar = false;
      this.isOtherSelected.emit(false);

    }
  }

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

export class SecondRow {
    profession: string = '';
    yearofexperience: string = '';
    education: string = '';
    file_name: string = '';
    other:string = '';

    [key: string]: string | undefined  | null;
}

