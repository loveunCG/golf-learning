import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyMentalComponent } from './academy-mental.component';

describe('AcademyMentalComponent', () => {
  let component: AcademyMentalComponent;
  let fixture: ComponentFixture<AcademyMentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademyMentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyMentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
