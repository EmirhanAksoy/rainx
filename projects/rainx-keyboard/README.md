# Virtual Keyboard Component

 Demo Application :
  
 https://stackblitz.com/edit/angular-ivy-difzur

 This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.0.

 This library has peer dependencies.

 Peer Dependencies :
  
   "bootstrap": "^4.3.1"

 Installation :

    npm install rainx-keyboard
    
  Usage :

    This keyboard component is able to bind data for ngModel and formcontrol.If an input has ngControl , the keyboard directly sets it , if has not it sets the html value.

  
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

      <input rainxKeyboard [(ngModel)]="value" />

      <rainx-keyboard [showOnlyFocus]="false">

      </rainx-keyboard>  

    Properties :
   
   - showOnlyFocus : Show keyboard only focus an input element
      
      type : booelan
      defaut : false
