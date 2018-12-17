import { TestBed } from '@angular/core/testing';
import Course from '../../shared/entities/Course';

import { CourseComponent } from './course.component';

describe('CourseComponent', () => {
  it('raises the selected event when clicked', () => {
    const courseComponent = new CourseComponent();
    const course: Course = {
      id: 14,
      title: 'Test',
      creationDate: '1994-09-01T19:50:20.439856+00:00',
      duration: 100,
      description: 'Test',
    };
    courseComponent.course = course;

    courseComponent.delete.subscribe(selectedCourse => expect(selectedCourse).toBe(course));
    
  });

  it('should create', () => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent]
    })
    const fixture = TestBed.createComponent(CourseComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
