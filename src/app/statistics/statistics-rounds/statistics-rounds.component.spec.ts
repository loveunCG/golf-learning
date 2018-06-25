import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsRoundsComponent } from './statistics-rounds.component';

describe('StatisticsRoundsComponent', () => {
  let component: StatisticsRoundsComponent;
  let fixture: ComponentFixture<StatisticsRoundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsRoundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsRoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
