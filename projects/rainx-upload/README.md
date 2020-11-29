# File Upload Component 

  Demo Application : 

  https://stackblitz.com/edit/angular-ivy-dfqfaw

  Installation :

    npm install rainx-upload
    
  Usage :
  
   Module Import :
      
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
    
   In html :
  
    <rainx-upload [multiple]="true" 
                  [showFileList]="false" 
                  [theme]="'success'"
                  [maxBayt]="400000" 
                  [text]="'Upload File'" 
                  (filesUpdated)="filesUpdated($event)" >
    </rainx-upload>
    
    
   Properties :
   
   - multiple : Must be set to true to add multiple files
      
      type : booelan
      defaut : false
      
   
   - showFileList : Set to true to see uploaded files as a list
   
      type : booelan
      defaut : false
   
   - theme : Button themes
   
      type : string = 'danger' | 'primary' | 'secondary' | 'info' | 'success'
      defaut : 'primary'
   
   - text : Default button text
   
      type : string
      defaut : 'Upload File' 

   - maxBayt : Max size of file
   
      type : number
      defaut : 0   
   
   Events : 
   
   - filesUpdated : It is triggered when the file is loaded and a file is deleted from the file list.
   
      return : File[] 
   
   

  
    
