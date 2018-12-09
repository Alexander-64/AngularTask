import { Component, OnInit } from '@angular/core';
import { Courses, AddedCourse } from '../data/mock-courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {
  courses = Courses;

  constructor() { }

  ngOnInit() {
    this.courses.push(AddedCourse);
  }
  onDelete(courseId: number) {
    console.log(courseId);
  }
}
