import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div>
            <mat-toolbar>
                <a mat-button routerLink="/">Home</a>
                <a mat-button routerLink="/login">Login</a>
                <a mat-button routerLink="/admin">Admin</a>
            </mat-toolbar>

            <router-outlet></router-outlet>
        </div>
    `,
    styles: []
})
export class AppComponent {
}
