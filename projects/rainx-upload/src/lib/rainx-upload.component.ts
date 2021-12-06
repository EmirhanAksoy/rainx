import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rainx-upload',
  templateUrl: 'rainx-upload.component.html',
  styleUrls: ['rainx-upload.component.css']
})
export class RainxUploadComponent implements OnInit {

  /**Allowed mime types. */
  @Input() public accept: string[] = [];

  /**Allowed max size of file. */
  @Input() public maxSize: number = 0;

  /**Allow multiple file upload.*/
  @Input() public multiple: boolean = false;

  /**Two-way binding for files. */
  @Input() public files: File[] = [];
  @Output() public filesChange: EventEmitter<File[]> = new EventEmitter<File[]>();
  public showDetail: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * File upload event handler.
   * @param event File upload event.
   * @returns 
   */
  public handleFileUploaded(event: any): void {
    if (event.target.files) {
      const files: File[] = Array.from(event.target.files);
      if (this.maxSize && files.some(x => x.size > this.maxSize)) {
        console.error('Maximum size exceeded');
        return;
      }
      files.forEach((file: File) => this.files.push(file));
      this.filesChange.emit(this.files);
    }
  }

  /**
   * File reset handler.
   * @param event Mouse click event.
   */
  public handleResetClick(event: MouseEvent): void {
    event.stopPropagation();
    this.files = [];
    this.filesChange.emit(this.files);
  }

  /**
  * Show detail handler.
  * @param event Mouse click event.
  */
  public handleDetailClick(event: MouseEvent): void {
    event.stopPropagation();
    this.showDetail = !this.showDetail;
  }

  /**
   * Download file handler.
   * @param file Selected file object.
   */
  public downloadFileHandler(file: File): void {
    const anchor: HTMLAnchorElement = window.document.createElement('a');
    anchor.href = window.URL.createObjectURL(new Blob([file], { type: file.type }));
    anchor.download = file.name;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  /**
   * Remove file handler.
   * @param index Selected file index in files array.
   */
  public removeFileHandler(index: number): void {
    this.files.splice(index, 1);
    this.filesChange.emit(this.files)
  }

}
