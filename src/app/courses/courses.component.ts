import { Component, OnInit } from '@angular/core';
import { Courses } from '../data/mock-courses';
import Course from '../shared/entities/Course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {
  courses = Courses;
  selectedCourse: Course;

  constructor() { }

  ngOnInit() {
  }

  onSelect(course: Course): void {
    this.selectedCourse = course;
  }

}
