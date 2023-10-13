import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PromiseAllComponent } from 'src/promises/promise-all.component';
import { PromiseIgnoreErrorsComponent } from 'src/promises/promise-ignore-errors.component';
import { PromiseRaceComponent } from 'src/promises/promise-race.component';
import { PromiseLastComponent } from 'src/promises/promise-last.component';
import { RecursivePromiseComponent } from "../promises/recursive-promise.component";

 

@NgModule({

  declarations: [
    AppComponent,
    PromiseAllComponent,
    PromiseIgnoreErrorsComponent,
    PromiseRaceComponent,
    PromiseLastComponent,
    RecursivePromiseComponent
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

