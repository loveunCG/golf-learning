import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsOverviewComponent } from './statistics-overview.component';

describe('StatisticsOverviewComponent', () => {
  let component: StatisticsOverviewComponent;
  let fixture: ComponentFixture<StatisticsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
