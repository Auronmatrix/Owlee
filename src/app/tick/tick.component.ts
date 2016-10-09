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
  status : string;
  lateExpanded : boolean;
  absentExpanded : boolean;
  lateStamps = [];
  absentStamps = [];


  toggleLateExpanded()
  {
    this.lateExpanded = !(this.lateExpanded);
  }

  toggleAbsentExpanded()
  {
    this.absentExpanded = !this.absentExpanded;
  }

  setHere()
  {
    this.status = 'here';
  }

  setUnchecked()
  {
    this.status = 'unchecked';
  }

  disable()
  {
    return this.status != 'unchecked';
  }

  getDisabledClass()
  {
   return this.disable() ? 'disabled' : '';
  }

  setLate()
  {
    this.lateCount++;
    this.status = 'late';
    this.lateStamps.push(new Date())
  }

  setAbsent()
  {
    this.absentCount++;
    this.status = 'absent';
    this.absentStamps.push(new Date())
  }

  getStatusClass()
  {
    switch(this.status)
    {
      case 'unchecked':
        return '';
      case 'here':
       return 'success';
       case 'late':
       return 'warning'
       case 'absent':
       return 'danger';
    }
    return '';
  }

  constructor(studentName : string){
    this.name = studentName;
    this.lateCount = 0;
    this.absentCount = 0;
    this.status = 'unchecked';
  }


}
