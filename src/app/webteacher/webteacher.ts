import { Component, OnInit, Injectable, EventEmitter }  from '@angular/core';

import {Students} from '../bean/students';
import {Validate} from '../common/validate'

@Component({
  templateUrl: './webteacher.html',
  styleUrls: ['./webteacher.css'],
})
export class WebTeacherComponent implements OnInit {
  public static id: number;
  av: number;
  st: string;
  check: number;
  public static str: string;
  students: Students[];
  constructor() {
    this.check = 2;
    WebTeacherComponent.id = 0;
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

  // student = new Students('12','Nguyen Van','A', '12/12/2016',7.0,'passed');
  // errorMessage: string;
  // studentsService: StudentsService
  // constructor() {

  //  }

  // addProduct() {     
  //   console.log(`3`);       
  //     if (!this.student) { return; }
  //     console.log(`4`);  
  //     this.studentsService.addStudent(this.student)
  //         .subscribe(
  //         student => this.student),
  //         error => this.errorMessage = <any>error;
  //     console.log(`5`); 

  // }

  ngOnInit() {
        
        // get users from secure api end point
        // this.userService.getUsers()
        //     .subscribe(users => {
        //         this.users = users;
        //     });
    }

  public static resoleID(): string {
    WebTeacherComponent.id = WebTeacherComponent.id + 1;
    if (WebTeacherComponent.id == 1) {
      WebTeacherComponent.str = '03';
      WebTeacherComponent.id = 3;
    }
    else if (WebTeacherComponent.id < 10 && WebTeacherComponent.id > 2) {
      WebTeacherComponent.str = '0' + WebTeacherComponent.id;
    }
    else {
      WebTeacherComponent.str = '' + WebTeacherComponent.id;
    }
    return WebTeacherComponent.str
  }
  addStudent(firstname: HTMLInputElement, lastname: HTMLInputElement, dob: HTMLInputElement, mathematic: HTMLInputElement, physic: HTMLInputElement): boolean {
    this.check = 2;
    if (firstname.value == '' || lastname.value == '' || dob.value == '' || mathematic.value == '' || physic.value == '') {
      this.check = 0;
    }
    else {
      if (Validate.checkMark(parseFloat(mathematic.value)) && Validate.checkMark(parseFloat(physic.value))) {
        this.av = (parseFloat(mathematic.value) + parseFloat(physic.value)) / 2;
        if (this.av < 5) {
          this.st = 'Failed';
        }
        else {
          this.st = 'Passed'
        }
        this.students.push(new Students(WebTeacherComponent.resoleID(), firstname.value, lastname.value, dob.value, this.av, this.st));
        this.check=1;
        firstname.value = '';
        lastname.value = '';
        dob.value = '';
      }
      else {
        alert(`Ban nhhap sai diem(Diem co gia tri tu 0  den 10)`)
      }
    }


    // title.value = '';
    // link.value = '';
    this.av = 0;
    this.st = '';
    mathematic.value = '';
    physic.value = '';

    return false;
  }

  // addStudent(firstname: HTMLInputElement, lastname: HTMLInputElement, dob: HTMLInputElement, mathematic: HTMLInputElement, physic: HTMLInputElement): boolean {
  //   if (Validate.checkMark(parseFloat(mathematic.value)) && Validate.checkMark(parseFloat(physic.value))) {
  //     this.av = (parseFloat(mathematic.value) + parseFloat(physic.value)) / 2;
  //     if (this.av < 5) {
  //       this.st = 'Failed';
  //     }
  //     else {
  //       this.st = 'Passed'
  //     }
  //     this.students.push(new Students(MainWeb.resoleID(), firstname.value, lastname.value, dob.value, this.av, this.st));
  //     firstname.value = '';
  //     lastname.value = '';
  //     dob.value = '';
  //   }
  //   else {
  //     alert(`Ban nhhap sai diem(Diem co gia tri tu 0  den 10)`)
  //   }



  //   // title.value = '';
  //   // link.value = '';
  //   this.av = 0;
  //   this.st = '';
  //   mathematic.value = '';
  //   physic.value = '';

  //   return false;
  // }
}