import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LoginComponent} from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {MessageModule} from 'primeng/message';
import {ButtonModule} from 'primeng/button';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule, ReactiveFormsModule,
        PanelModule, InputTextModule, MessageModule, ButtonModule
    ]
})
export class AuthModule {
}
