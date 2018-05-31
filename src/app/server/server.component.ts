// here we are importing the library to use the component element
import {Component} from '@angular/core';

@Component({
    // here we name the component to use it in app
    selector: 'app-server',
    // here we are giving the template that will be rendered in the app
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
// here we are exporting the class to be used in the hole application
export class ServerComponent {
    serverId = 10;
    serverStatus = 'Offline';
    online = 'Online';
    offline = 'Offline';

    constructor() {
        // here we are making an random function that will assign to the variable serverStatus a random value
        return this.serverStatus = Math.random() > 0.5 ? this.online : this.offline;
    }

    // this is a method to return value of the serverStatus variable
    getServerStatus() {
        return this.serverStatus;
    }

    getServerColor() {
        // here we are returning certain color
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }
}
