import {Routes,RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {WebHomeComponent} from './webhome/webhome';
import {WebTeacherComponent} from './webteacher/webteacher'
import {WebStudentComponent} from './webstudent/webstudent';

import { AuthGuardStudent, AuthGuardTeacher } from './_guards/auth.guard';

export const rootRouterConfig: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent},
  { path: 'teacher', component: WebTeacherComponent, canActivate: [AuthGuardTeacher] },
  { path: 'student', component: WebStudentComponent, canActivate: [AuthGuardStudent] },
  
  //{path: '', redirectTo: '', pathMatch: 'full'},
];
