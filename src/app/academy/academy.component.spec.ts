import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyComponent } from './academy.component';

describe('AcademyComponent', () => {
  let component: AcademyComponent;
  let fixture: ComponentFixture<AcademyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
