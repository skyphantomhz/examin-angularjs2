import { Component, OnInit, Injectable, EventEmitter }  from '@angular/core';

import {Students} from '../bean/students';

@Component({
  selector: 'webstudent',
  templateUrl: './webstudent.html'
})
export class WebStudentComponent {
  students: Students[];
  constructor() {
    this.students = [
      new Students(
        '01',
        'Le Thi',
        'Thui',
        '1996-09-25',
        8.0,
        'Passed'),
      new Students(
        '02',
        'Nguyen Thi',
        'Thu Y',
        '1996-09-06',
        4.0,
        'Failed')
    ]
  }
}