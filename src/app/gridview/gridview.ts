import {Component} from '@angular/core';
import {Students} from '../bean/students';
@Component({
  selector   : 'gridview',
  templateUrl: './gridview.html',
  styleUrls: ['./gridview.css'],
  inputs: ['studentList'],
})
export class GridView {
  bool: number;
  studentList: Students[];
  constructor(){
    this.bool=1;
  }
  sortAverage(){
    if(this.bool==1){
      this.bool=0;
      this.studentList=this.studentList.sort((a: Students, b: Students) => b.average - a.average);
    }
    else{
      this.studentList=this.studentList.sort((a: Students, b: Students) => a.average - b.average);
      this.bool=1;
    }
  }
  

}