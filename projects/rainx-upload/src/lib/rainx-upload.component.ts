import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rainx-upload',
  templateUrl: 'rainx-upload.component.html',
  styleUrls: ['rainx-upload.component.css']
})
export class RainxUploadComponent implements OnInit {
  @Input() public mimes: string[] = [];
  @Input() public maxSize: number = 40000;
  @Input() public multiple: boolean = false;
  @Input() public files: File[] = [];
  @Output() public filesChanged: EventEmitter<File[]> = new EventEmitter<File[]>();

  constructor() { }

  ngOnInit(): void {
  }

  public fileUploaded(event: any) {
    if (event.target.files) {
      const files: File[] = Array.from(event.target.files);
      files.forEach((file: File) => this.files.push(file));
      this.filesChanged.emit(this.files);
    }
  }



}
