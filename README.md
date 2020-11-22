# File Upload Component 

  This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.0.

  https://www.npmjs.com/package/rainx-upload
  
  ## Demo Application 

   https://stackblitz.com/edit/angular-ivy-dzhigu?file=src/app/app.component.html

  ## Installation

    npm install rainx-upload
    
  ## Usage 
  
   ### Module Import
      
      import { BrowserModule } from '@angular/platform-browser';
      import { NgModule } from '@angular/core';
      import { AppRoutingModule } from './app-routing.module';
      import { AppComponent } from './app.component';
      import { RainxUploadModule } from 'rainx-upload';

     @NgModule({
       declarations: [
         AppComponent,
       ],
       imports: [
         BrowserModule,
         AppRoutingModule,
         RainxUploadModule
       ],
       providers: [],
       bootstrap: [AppComponent]
    })
    export class AppModule { }
    
   ### HTML
  
    <rainx-upload [multiple]="true" 
                  [showFileList]="false" 
                  [class]="'btn btn-danger w-100'" 
                  [text]="'Upload File'" 
                  (uploadFinished)="uploadFinished($event)" >
    </rainx-upload>
    
    
   ## Properties
   
   - multiple : Must be set to true to add multiple files
      
      type : booelan
      defaut : false
      
   
   - showFileList : Set to true to see uploaded files as a list
   
      type : booelan
      defaut : false
   
   - class : Bootstrap classes
   
      type : string
      defaut : 'btn btn-sm w-100 btn-primary'
   
   - text : Default button text
   
      type : string
      defaut : 'Upload File' 
   
   ## Events 
   
   - uploadFinished : It is triggered when the file is loaded and a file is deleted from the file list.
   
      return : File[] 
     
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

      <input rainxKeyboard [(ngModel)]="value" />

      <rainx-keyboard>

      </rainx-keyboard>     
   
   

  
    
