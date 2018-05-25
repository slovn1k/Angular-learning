import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    // we can use alternative method for template
    // here we are specifying a new template for servers component
    // template: `
    //     <app-server></app-server>
    //     <app-server></app-server>`,
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    // simple variable
    allowNewServer = false;
    serverCreation = 'No Server was created!';
    serverName = 'Test';
    serverCreated = false;

    constructor() {
        // here we are using javascript function to change the value of the allowNewServer variable after a certain period of time
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit() {
    }

    // this method assignees value to the serverCreation variables
    onCreateServer() {
        this.serverCreated = true;
        this.serverCreation = 'Server was created with the Name: ' + this.serverName;
    }

    // here we are using parameter in the method of type Event
    onUpdateServer(event: Event) {
        // here we assign HTMLInputValue to the variable by using javascript methodology
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}
