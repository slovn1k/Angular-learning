import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import library for operating with forms in angular
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // here we are importing the module for form
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
