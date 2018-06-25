import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyStatisticsComponent } from './academy-statistics.component';

describe('AcademyStatisticsComponent', () => {
  let component: AcademyStatisticsComponent;
  let fixture: ComponentFixture<AcademyStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademyStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
