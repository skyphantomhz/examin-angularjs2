import {Injectable}   from '@angular/core';
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Students} from '../bean/students';

@Injectable()
export class StudentsService {

    private studentsUrl = 'http://localhost:8000/app/model/students.json';

    constructor(private http: Http) { }

    getStudent(): Observable<Students[]> {
        return this.http.get(this.studentsUrl)
            .map((response: Response) => <Students[]>response.json())
            .catch(this.handleError);
    }

    addStudent(student: Students) {
        console.log(`4.1`);  
        let body = JSON.stringify(student);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.studentsUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}