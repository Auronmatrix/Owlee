import { Component, OnInit } from '@angular/core';
import { Student } from "../student/student.model";
import { StudentFormComponent } from "../student-form/student-form.component";

@Component({
  selector: 'app-tick',
  templateUrl: './tick.component.html',
  styleUrls: ['./tick.component.css'],
})

export class TickComponent implements OnInit {
  title = "Class attendance checker";
  students = []
  constructor() {
    this.students.push(new Student("John", 1, 3));
    this.students.push(new Student("Andrew", 0, 0));
    this.students.push(new Student("Jason", 4, 7));
  }

  addNewStudent(event)
  {
    this.students.push(event.value);
  }

  ngOnInit() {
  }
}
