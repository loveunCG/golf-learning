import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyBallFlightComponent } from './academy-ball-flight.component';

describe('AcademyBallFlightComponent', () => {
  let component: AcademyBallFlightComponent;
  let fixture: ComponentFixture<AcademyBallFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademyBallFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyBallFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
