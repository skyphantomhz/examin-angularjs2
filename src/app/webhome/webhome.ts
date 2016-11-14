import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
    //moduleId: module.id,
    templateUrl: './webhome.html'
})

export class WebHomeComponent implements OnInit { 
    //users: User[] = [];
    //private userService: UserService;
    //constructor(private userService: UserService) { }
    constructor(
        
        private router: Router,
        ) {
            //this.router.navigate(['/teacher']);
        }

    ngOnInit() {
        
        // get users from secure api end point
        // this.userService.getUsers()
        //     .subscribe(users => {
        //         this.users = users;
        //     });
    }

}
