import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RainxUploadComponent } from './rainx-upload.component';



@NgModule({
  declarations: [RainxUploadComponent],
  imports: [
    CommonModule
  ],
  exports: [RainxUploadComponent]
})
export class RainxUploadModule { }
