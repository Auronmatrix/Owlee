import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from "../student/student.model";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})

export class StudentFormComponent implements OnInit {
  public name = "";
  @Output() addStudentEvent = new EventEmitter();
  constructor() { }

  addStudent()
  {
     this.addStudentEvent.emit({
       value: new Student(this.name, 0, 0)
     });
     this.name = "";
  }

  ngOnInit() {
  }

}
