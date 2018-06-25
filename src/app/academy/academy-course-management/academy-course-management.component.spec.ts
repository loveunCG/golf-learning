import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyCourseManagementComponent } from './academy-course-management.component';

describe('AcademyCourseManagementComponent', () => {
  let component: AcademyCourseManagementComponent;
  let fixture: ComponentFixture<AcademyCourseManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademyCourseManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyCourseManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
