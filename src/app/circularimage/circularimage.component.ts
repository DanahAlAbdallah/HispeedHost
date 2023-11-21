import {Component, EventEmitter, Input, Output} from '@angular/core';
import imageCompression from "browser-image-compression";

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

  async onFileSelected(event: any) {
    const file = event.target.files?.[0];
    if (file) {
      await this.readAndDisplayImage(file);
    }
  }

  private async readAndDisplayImage(file: File) {

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    }

    try {
      const fileName = file.name;
      const fileExtension = fileName.split('.').pop()!.toLowerCase();

      if (fileExtension === 'jpeg' || fileExtension === 'png' || fileExtension === 'jpg') {

        const compressedFile = await imageCompression(<File>file, options);
        if (compressedFile) {
          this.selectedFileNameImage = fileName;
          this.isFileNotSupportedImage = false;
          this.selectedFileImage = compressedFile;
          this.img_profile_file.emit(this.selectedFileImage);
          this.isFileNotSupportedImageEvent.emit(this.isFileNotSupportedImage)

        } else {
          this.selectedFileImage = null;
        }
      }
    else{
        this.isFileNotSupportedImage = true;
        this.isFileNotSupportedImageEvent.emit(this.isFileNotSupportedImage)
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


}
