# Listbox Component 

  This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

  https://www.npmjs.com/package/rainx-listbox
  
  ## Installation

    npm install rainx-listbox
    
  ## Usage 
  
   ### Module Import
      
      import { BrowserModule } from '@angular/platform-browser';
      import { NgModule } from '@angular/core';
      import { AppRoutingModule } from './app-routing.module';
      import { AppComponent } from './app.component';
      import { RainxListboxModule } from 'rainx-listbox';

     @NgModule({
       declarations: [
         AppComponent,
       ],
       imports: [
         BrowserModule,
         AppRoutingModule,
         RainxListboxModule
       ],
       providers: [],
       bootstrap: [AppComponent]
    })
    export class AppModule { }
    
   ### In the template
  
    <rainx-listbox 
            [data]="data" 
            [key]="'id'" 
            [display]="['no','name']">
    </rainx-listbox>
    
   ## Properties
   
   - data : Data source for listbox 
      
      type : any []
      defaut : []
    
   - key : Unique identifier for items
   
      type : string
      defaut : 'id'   

   - display :  Display properties for items
   
      type : string [] | string
      defaut : []

   - seperator :  Seperator for display values

      type: string 
      default : '-'        

   - primitive :  Indicates object or primitive type

      type: boolean 
      default : true      

   - selectedKey :  Indicates selected item key

      type: any 
      default : null      

   - removeable :  Indicates items removeable or not

      type: any 
      default : null 

   - resizeable :  Indicates listbox resizeable or not

      type: any 
      default : null        

   ## Events 

    - selectionChange : It is triggered when item selected.
   
      return : any[] 

    - removeChange : It is triggered when items removed.
   
      return : any[] 