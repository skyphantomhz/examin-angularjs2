import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
    //moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    
    constructor(
        
        private router: Router,
        private authenticationService: AuthenticationService
        ) {}
    ngOnInit() {
        //reset login status
        this.authenticationService.logout();
    }

    login() {
        // this.router.navigate(['/']);
        // this.loading = true;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    if(this.authenticationService.token === 'fake-jwt-teacher'){
                        this.router.navigate(['/teacher']);
                    }
                    else{
                        this.router.navigate(['/student']);
                    }
                    
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}
