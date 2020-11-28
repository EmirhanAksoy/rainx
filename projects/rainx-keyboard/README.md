# Keyboard Component

 https://www.npmjs.com/package/rainx-keyboard

 This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.0.

 Installation :

    npm install rainx-keyboard
    
  Usage :
  
   Module Import :
      
      import { BrowserModule } from '@angular/platform-browser';
      import { NgModule } from '@angular/core';
      import { AppRoutingModule } from './app-routing.module';
      import { AppComponent } from './app.component';
      import { RainxKeyboard } from 'rainx-keyboard';

     @NgModule({
       declarations: [
         AppComponent,
       ],
       imports: [
         BrowserModule,
         AppRoutingModule,
         RainxKeyboardModule
       ],
       providers: [],
       bootstrap: [AppComponent]
    })
    export class AppModule { }
    
   In html :
    
      Add `rainxKeyboard` directive to all inputs.
      
      It is require that all input that use keyboard component must have ngModel or formControl.

      <input rainxKeyboard [(ngModel)]="value" />

      <rainx-keyboard>

      </rainx-keyboard>     