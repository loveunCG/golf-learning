import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlyAskedComponent } from './frequently-asked.component';

describe('FrequentlyAskedComponent', () => {
  let component: FrequentlyAskedComponent;
  let fixture: ComponentFixture<FrequentlyAskedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentlyAskedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentlyAskedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
