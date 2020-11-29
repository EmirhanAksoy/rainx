import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'rainx-upload',
  templateUrl: './rainx-upload.component.html',
  styleUrls: ['./rainx-upload.style.scss']
})
export class RainxUploadComponent {

  @ViewChild('hiddenInput') public someInput: any | undefined;

  @Output() public filesUpdated = new EventEmitter<any>(true);

  @Input() public files: File[] = [];
  @Input() public maxBayt = 0;
  @Input() public multiple = false;
  @Input() public theme: 'danger' | 'primary' | 'secondary' | 'info' | 'success' = 'primary';
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
    const fileList: File[] = Array.from(event.target.files);
    if (this.maxBayt) {
      this.filesUpdated.emit(fileList.filter(x => x.size <= this.maxBayt));
    } else {
      this.filesUpdated.emit(fileList);
    }
  }

  public removeFile(event: any, file: File): void {
    const index = this.files.map(x => x.lastModified).indexOf(file.lastModified);
    this.files.splice(index, 1);
    this.filesUpdated.emit(this.files);
  }

  public shortFileName(file: File): string {
    return `${file.name.substring(0, 10)} ...  .${file.name.split('.').pop()}`;
  }

  public downloadFile(event: MouseEvent, file: File): void {
    if (!file) {
      return;
    }
    const a = window.document.createElement('a');
    a.href = window.URL.createObjectURL(file);
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

}
