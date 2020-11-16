import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-rainx-upload',
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

  constructor() { }

  public change(event: any): void {
    this.files = event.target.files;
    this.uploadFinished.emit(this.files);
  }

  public get fileName(): string {
    if (this.files?.length > 1) {
      return `${this.files.length} files`;
    }
    if (this.files.length === 1) {
      const fileName = this.files[0].name;
      return `${fileName.substring(0, 15)} ...  .${this.files[0].name.split('.').pop()}`;
    }
    return this.text;
  }

  public uploadClick(event: any): void {
    this.someInput.nativeElement.click();
  }

}
