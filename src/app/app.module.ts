import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from "./auth/auth.module";
import {AdminModule} from "./admin/admin.module";
import {MainModule} from "./main/main.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {GraphQLModule} from './graphql.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {PanelModule} from 'primeng/panel';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule, ReactiveFormsModule,
        AuthModule,
        AdminModule,
        MainModule,
        GraphQLModule,
        HttpClientModule,
        PanelModule, MenuModule, ButtonModule, SidebarModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
