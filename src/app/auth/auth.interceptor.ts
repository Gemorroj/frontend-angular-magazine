import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const accessToken = this.authService.getAccessToken();
        if (!accessToken) {
            return next.handle(req);
        }

        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return next.handle(req);
    }
}
