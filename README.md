# File Upload Component 

  This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

  NPM  : https://www.npmjs.com/package/rainx-upload

  Demo : https://stackblitz.com/edit/angular-ivy-e3cxt2?file=src/app/app.component.ts
  
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
    
   ### In the template
  
    <rainx-upload [multiple]="true" 
                  [(files)]"="appFiles"
                  [accept]="['image/png']" >
    </rainx-upload>
    
    
   ## Properties
   
   - multiple : Must be set to true to add multiple files
      
      type : booelan
      defaut : false
    
   - maxSize : Max size of file
   
      type : number
      defaut : 0   

   - accept : Allowed mime types
   
      type : string []
      defaut : []      

   ## Events 
   
   - filesChange : It is triggered when the file is loaded or files reset.
   
      return : File[] 