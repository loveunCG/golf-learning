import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyShotShapingComponent } from './academy-shot-shaping.component';

describe('AcademyShotShapingComponent', () => {
  let component: AcademyShotShapingComponent;
  let fixture: ComponentFixture<AcademyShotShapingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademyShotShapingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyShotShapingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
