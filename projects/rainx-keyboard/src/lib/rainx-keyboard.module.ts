import { NgModule } from '@angular/core';
import { RainxKeyboardComponent } from './rainx-keyboard.component';
import { RainxKeyboardButtonComponent } from './rainx-keyboard-button/rainx-keyboard-button.component';
import { CommonModule } from '@angular/common';
import { RainxKeyboardDirective } from './rainx-keyboard.directive';
import { RainxKeyboardService } from './rainx-keyboard.service';



@NgModule({
  declarations: [
    RainxKeyboardComponent,
    RainxKeyboardButtonComponent,
    RainxKeyboardDirective],
  imports: [
    CommonModule
  ],
  exports: [
    RainxKeyboardComponent,
    RainxKeyboardDirective],
  providers: [
    RainxKeyboardService
  ]

})
export class RainxKeyboardModule { }
