import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import Course from '../../shared/entities/Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Output() delete = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.course.id);
  }
}
