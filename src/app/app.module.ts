import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import library for operating with forms in angular
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
// here are are importing the library of the server component
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
    declarations: [
        AppComponent,
        // here we are importing the server component
        ServerComponent,
        ServersComponent
    ],
    imports: [
        BrowserModule,
        // here we are importing the module for form
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
