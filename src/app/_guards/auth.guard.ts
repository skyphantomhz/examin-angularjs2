import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
@Injectable()
export class AuthGuardTeacher implements CanActivate {

    constructor(private router: Router,
                private authenticationService: AuthenticationService ) { }

    canActivate() {
        if (localStorage.getItem('currentUser') && this.authenticationService.token === 'fake-jwt-teacher') {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}
@Injectable()
export class AuthGuardStudent implements CanActivate {

    constructor(private router: Router,
                private authenticationService: AuthenticationService ) { }

    canActivate() {
        if (localStorage.getItem('currentUser') && this.authenticationService.token === 'fake-jwt-student') {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}