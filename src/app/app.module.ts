import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Nar} from "./nar/nar";
import {Slider} from "./slider/slider";
import {WebTeacherComponent} from "./webteacher/webteacher";
import {GridView} from "./gridview/gridview";
import {Database} from "./database/database";
import {FormWeb} from "./formweb/formweb";
import {StudentsService} from "./model/students.service";
import {WebStudentComponent} from "./webstudent/webstudent";

import {LoginComponent} from './login/login.component';
import {WebHomeComponent} from './webhome/webhome';

import { AuthGuardTeacher, AuthGuardStudent } from './_guards/auth.guard';
import { AuthenticationService} from './_services/authentication.service';
import {UserService } from './_services/user.service';

import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WebHomeComponent,
    Nar,
    Slider,
    WebTeacherComponent,
    GridView,
    Database,
    FormWeb,
    WebStudentComponent
    
  ],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [AuthGuardTeacher, AuthGuardStudent, fakeBackendProvider, MockBackend, BaseRequestOptions, AuthenticationService, UserService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent ]
})
export class AppModule {
}
