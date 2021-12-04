import { NgModule } from '@angular/core';
import { RainxUploadComponent } from './rainx-upload.component';
import { FileTextPipe } from './pipes/file-text.pipe';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    RainxUploadComponent,
    FileTextPipe
  ],
  imports: [
    CommonModule 
  ],
  exports: [
    RainxUploadComponent
  ]
})
export class RainxUploadModule { }
