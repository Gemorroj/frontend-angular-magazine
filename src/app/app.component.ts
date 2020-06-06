import {Component} from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import {AuthService} from "./auth/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    template: `
        <div style="margin: 1%">
            <p-sidebar [(visible)]="displaySidebar">
                <p-menu [model]="sidebarItems"></p-menu>
            </p-sidebar>

            <p-panel header="Angular Magazine Home">
                <button type="button" (click)="displaySidebar = true" pButton icon="pi pi-bars" label="Menu"></button>
            </p-panel>

            <router-outlet></router-outlet>
        </div>
    `,
    providers: [MessageService]
})
export class AppComponent {

    constructor(private authService: AuthService,
                private router: Router) {
    }

    displaySidebar = false;
    sidebarItems: MenuItem[] = [
        {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/'},
        {label: 'Sign In', icon: 'pi pi-fw pi-sign-in', routerLink: '/login'},
        {label: 'Sign Out', icon: 'pi pi-fw pi-sign-out', command: () => {
            this.authService.logout();
            this.router.navigate(['/']);
        }},
        {label: 'Admin', icon: 'pi pi-fw pi-th-large', routerLink: '/admin'},
    ];
}
