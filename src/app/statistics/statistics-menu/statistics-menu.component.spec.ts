import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsMenuComponent } from './statistics-menu.component';

describe('StatisticsMenuComponent', () => {
  let component: StatisticsMenuComponent;
  let fixture: ComponentFixture<StatisticsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
