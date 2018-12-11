import { TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';

describe('CourseComponent', () => {
   it('should create', () => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent ]
    })
    const fixture = TestBed.createComponent(CourseComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
