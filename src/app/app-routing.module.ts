import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {IndexComponent as AdminIndexComponent} from "./admin/index/index.component";
import {AuthGuard} from "./auth/auth.guard";
import {IndexComponent as MainIndexComponent} from "./main/index/index.component";


const routes: Routes = [
    {path: '', component: MainIndexComponent},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: AdminIndexComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
