import { NgModule } from '@angular/core';
import { RainxUploadComponent } from './rainx-upload.component';
import { FileTextPipe } from './pipes/file-text.pipe';



@NgModule({
  declarations: [
    RainxUploadComponent,
    FileTextPipe
  ],
  imports: [
  ],
  exports: [
    RainxUploadComponent
  ]
})
export class RainxUploadModule { }
