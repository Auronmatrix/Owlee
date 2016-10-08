import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tick',
  templateUrl: './tick.component.html',
  styleUrls: ['./tick.component.css']
})
export class TickComponent implements OnInit {
  title = "Class attendance checker";
  students = []
  constructor() {
    this.students.push(new Student("John"));
    this.students.push(new Student("Andrew"));
    this.students.push(new Student("Jason"));
  }

  ngOnInit() {
  }

}

class Student{
  name : string;
  lateCount : number;
  absentCount : number;

  constructor(studentName : string){
    this.name = studentName;
    this.lateCount = 0;
    this.absentCount = 0;
  }
}
