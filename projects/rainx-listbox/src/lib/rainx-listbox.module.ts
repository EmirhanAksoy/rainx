import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RemovedPipe } from './pipes/removed.pipe';
import { TransformPipe } from './pipes/transform.pipe';
import { RainxListboxComponent } from './rainx-listbox.component';

@NgModule({
  declarations: [
    RainxListboxComponent,
    TransformPipe,
    RemovedPipe
  ],
  imports: [
    CommonModule 
  ],
  exports: [
    RainxListboxComponent
  ]
})
export class RainxListboxModule { }
