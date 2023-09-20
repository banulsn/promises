import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

 

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { PromiseAllComponent } from 'src/promise-all/promise-all.component';

 

@NgModule({

  declarations: [

    AppComponent,

    PromiseAllComponent

  ],

  imports: [

    BrowserModule,

    FormsModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }

 