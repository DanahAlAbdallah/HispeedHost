import {Component, EventEmitter, Input, Output} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import imageCompression from "browser-image-compression";
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-circularimage',
  templateUrl: './circularimage.component.html',
  styleUrls: ['./circularimage.component.css']
})
export class CircularimageComponent {
  imageUrl: string | ArrayBuffer | null = null;

  @Output() img_profile_file = new EventEmitter<File>
  selectedFileImage?: File | null;
  selectedFileNameImage: string | null = null;
  isFileNotSupportedImage: boolean =false;
  @Output() isFileNotSupportedImageEvent = new EventEmitter<boolean>
  @Input() isSomethingEmpty: boolean =false;
  @Output() isCompressing = new EventEmitter<boolean>

  constructor(
    private sanitizer: DomSanitizer
  ) {
  }


  async onFileSelected(event: any) {
    const file = event.target.files?.[0];
    if (file) {
      await this.readAndDisplayImage(file);
    }else{
      this.selectedFileImage = null;
      this.imageUrl = null; 

    }
  }

  private async readAndDisplayImage(file: File) {
    this.isCompressing.emit(false);
    this.isFileNotSupportedImageEvent.emit(false)

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    }

    try {
      const fileName = file.name;
      const fileExtension = fileName.split('.').pop()!.toLowerCase();

      if (fileExtension === 'jpeg' || fileExtension === 'png' || fileExtension === 'jpg') {

        this.isCompressing.emit(true);
        const compressedFile = await imageCompression(<File>file, options);
        if (compressedFile) {
          this.selectedFileNameImage = fileName;
          this.isFileNotSupportedImage = false;
          this.selectedFileImage = compressedFile;
          this.img_profile_file.emit(this.selectedFileImage);
          this.isFileNotSupportedImageEvent.emit(this.isFileNotSupportedImage)
          this.isCompressing.emit(false);
        } else {
          this.selectedFileImage = null;
          this.isCompressing.emit(false);

        }
      }
    else{
      this.isCompressing.emit(false);

        this.isFileNotSupportedImage = true;
        this.isFileNotSupportedImageEvent.emit(this.isFileNotSupportedImage)
        this.selectedFileImage = null;
        this.imageUrl = null; 
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        // @ts-ignore
        this.imageUrl = e.target?.result;
      };
      reader.readAsDataURL(file);
    }catch (error) {
      console.log(error);
    }

  }


  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl!);
    // event.blob can be used to upload the cropped image
  }
  imageLoaded(image: LoadedImage) {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }


  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click(); // Simulate a click event on the file input
    }
  }

}
