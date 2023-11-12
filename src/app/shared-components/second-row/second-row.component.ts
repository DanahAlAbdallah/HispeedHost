import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ImigrationService } from 'src/app/classes/imigration.service';
import imageCompression from 'browser-image-compression';

@Component({
  selector: 'app-second-row',
  templateUrl: './second-row.component.html',
  styleUrls: ['./second-row.component.css']
})
export class SecondRowComponent implements OnInit {
  myForm: FormGroup;
  @Input() formFields?: SecondRow;
  @Input() isSomethingEmpty: boolean = false;
  @Output() secondRowData = new EventEmitter<SecondRow>
  @Output() cv_file = new EventEmitter<File>
  @Output() img_profile_file = new EventEmitter<File>
  @Output() isOtherSelected = new EventEmitter<boolean>


  isFileNotSupported: boolean = false;
  isFileNotSupportedImage:boolean = false;

  professions: string[] = []
  years: string[] = []

  selectedFile?: File | null;
  selectedFileName: string | null = null;

  selectedFileImage?: File | null;
  selectedFileNameImage: string | null = null;

  isOtherSelectedVar: boolean = false;
  isMoreThanMaxFileSize: boolean = false;
  isFileNotSupportedImg: boolean = false;
  uploading: boolean = false;

  constructor(private fb: UntypedFormBuilder, private service: ImigrationService) {
    this.myForm = this.fb.group({
      profession: ['', Validators.required],
      yearofexperience: ['', Validators.required],
      education: ['', Validators.required],
      filename: ['', Validators.required],
      filename_img: ['', Validators.required],
      other: ['', Validators.required]

    });
  }

  ngOnInit(): void {
    this.service.getAllProfessions().subscribe({
      next: (v: any) => {
        v.forEach((profession: any) => {
          this.professions.push(profession.name);
        });

      },
      error: (e) => {
      },
      complete: () => {
      }
    });
  }

  onFieldChange(fieldName: string, value: string) {
    this.formFields![fieldName] = value
    this.secondRowData.emit(this.formFields);

    if (fieldName == "profession" && value == "Other") {
      this.isOtherSelectedVar = true;
      this.isOtherSelected.emit(true);
    } else if(fieldName == "profession" && value != "Other") {
      this.isOtherSelectedVar = false;
      this.isOtherSelected.emit(false);

    }
  }

  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const selectedFile = inputElement.files ? inputElement.files[0] : null;

    if (selectedFile) {
      const fileName = selectedFile.name;
      const fileExtension = fileName.split('.').pop()!.toLowerCase();
      this.isMoreThanMaxFileSize = false;
      this.isFileNotSupported = false;
      // Check file extension
      if (fileExtension === 'pdf' || fileExtension === 'docx') {
        this.isFileNotSupported = false;
        this.isMoreThanMaxFileSize = false;
        // Check file size
        const maxSizeInBytes = 10 * 1024 * 1024; // 10 MB
        if (selectedFile.size <= maxSizeInBytes) {
          this.isMoreThanMaxFileSize = false;
          this.isFileNotSupported = false;
          this.selectedFile = selectedFile;
          this.selectedFileName = fileName;
          this.myForm.patchValue({filename: this.selectedFileName});
          this.onFieldChange('file_name', this.selectedFileName);
          this.cv_file.emit(this.selectedFile);
        } else {
          this.isMoreThanMaxFileSize = true;
        }
      } else {
        this.isFileNotSupported = true;

      }
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
    filename_img:string = '';
    other:string = '';

    [key: string]: string | undefined  | null;
}

