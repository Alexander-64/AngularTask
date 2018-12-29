import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import Course from '../../shared/entities/Course';

import { CourseComponent } from './course.component';

// Test as a class
describe('CourseComponent class only', () => {
  it('raises the selected event when clicked', () => {
    const comp = new CourseComponent();
    const course: Course = {
      id: 3,
      title: 'Test title',
      creationDate: '1994',
      duration: 11,
      description: 'Test description',
    };
    comp.course = course;

    comp.delete.subscribe((number) => expect(number).toBe(3));
    comp.onDelete();
  });
});

// Stand Alone testing
describe('CourseComponent', () => {
  let component: CourseComponent;
  let expectedCourse: Course;
  let fixture: ComponentFixture<CourseComponent>;
  let courseTitleDe: DebugElement;
  let courseTitleEl: HTMLElement;
  let courseButtonDeleteDe: DebugElement;
  let courseButtonDeleteEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    courseTitleDe = fixture.debugElement.query(By.css('.course__content__header__title'));
    courseTitleEl = courseTitleDe.nativeElement;
    courseButtonDeleteDe = fixture.debugElement.query(By.css('.course__buttons__delete'));
    courseButtonDeleteEl = courseButtonDeleteDe.nativeElement;

    expectedCourse = {
      id: 3,
      title: 'Test title',
      creationDate: '1994',
      duration: 11,
      description: 'Test description',
    };

    component.course = expectedCourse;

    fixture.detectChanges();
  });

  it('should display course title ', () => {
    expect(courseTitleEl.textContent).toContain('Test title');
  });

  it('should raise selected event when clicked (element.click)', () => {
    let courseId: Number;
    component.delete.subscribe((selectedCourseId) => courseId = selectedCourseId);

    courseButtonDeleteEl.click();
    expect(courseId).toBe(3);
  });
});

// Test host testing

describe('CourseComponent when inside a test host', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let expectedCourse: Course;
  let courseTitleDe: DebugElement;
  let courseTitleEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent, TestHostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    courseTitleDe = fixture.debugElement.query(By.css('.course__content__header__title'));
    courseTitleEl = courseTitleDe.nativeElement;
    expectedCourse = {
      id: 3,
      title: 'Test title',
      creationDate: '1994',
      duration: 11,
      description: 'Test description',
    };

    testHost.course = expectedCourse;

    fixture.detectChanges();
  });

  it('should display course title ', () => {
    expect(courseTitleEl.textContent).toContain('Test title');
  });
});

////// Test Host Component //////
import { Component } from '@angular/core';

@Component({
  template: `
      <div>
        <app-course>
          [course]="course"
        </app-course>
      </div>
    `
})

class TestHostComponent {
  course: Course = {
    id: 3,
    title: 'Test title',
    creationDate: '1994',
    duration: 11,
    description: 'Test description',
  };
  //selectedCourse: Course;
  //onDelete(courseId: number) { this.course.id = courseId; }
}

//  (delete)="onDelete($event)"