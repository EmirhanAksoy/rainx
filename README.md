# File Upload Component 

  https://www.npmjs.com/package/rainx-upload

  ## Installation

    npm install rainx-upload
    
  ## Usage 
  
   - Module Import
      
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
    
   - HTML
  
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
   
   

  
    
