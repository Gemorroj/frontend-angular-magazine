import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        public formBuilder: FormBuilder,
        public authService: AuthService,
        public router: Router,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: [''],
            password: [''],
        })
    }

    loginUser() {
        this.authService.login(this.loginForm.value).subscribe(res => {
            const returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
            this.router.navigate([returnUrl]);
        }, err => {
            window.alert(err.toString());
        });
    }
}
