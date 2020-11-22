import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'rainx-upload',
  templateUrl: './rainx-upload.component.html',
  styleUrls: ['./rainx-upload.style.scss']
})
export class RainxUploadComponent {

  @ViewChild('hiddenInput') public someInput: any | undefined;

  @Output() public uploadFinished = new EventEmitter<any>(true);

  @Input() public files: File[] = [];
  @Input() public multiple = false;
  @Input() public class = 'btn btn-sm w-100 btn-primary';
  @Input() public accept = '*';
  @Input() public text = 'Upload file';
  @Input() public showFileList = false;

  constructor() { }



  public get filesExist(): boolean {
    return this.files && this.files.length > 0;
  }

  public get fileName(): string {
    if (this.files?.length > 1) {
      return `${this.files.length} files`;
    }
    if (this.files.length === 1) {
      const fileName = this.shortFileName(this.files[0]);
      return fileName;
    }
    return this.text;
  }

  public uploadClick(event: any): void {
    this.someInput.nativeElement.click();
  }

  public change(event: any): void {
    this.files = Array.from(event.target.files);
    this.uploadFinished.emit(this.files);
  }

  public removeFile(event: any, file: File): void {
    const index = this.files.map(x => x.lastModified).indexOf(file.lastModified);
    this.files.splice(index, 1);
    this.uploadFinished.emit(this.files);
  }

  public shortFileName(file: File): string {
    return `${file.name.substring(0, 10)} ...  .${file.name.split('.').pop()}`;
  }

}
