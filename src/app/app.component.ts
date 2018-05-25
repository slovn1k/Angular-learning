import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // styleUrls: ['./app.component.css']
    // alternative method of styling, this method is better to use if there is not so much styling
    styles: [`
        p {
            color: orangered;
        }
        h1 {
            color: yellowgreen;
        }
    `]
})
export class AppComponent {
    title = 'app';
    name = '';
}
