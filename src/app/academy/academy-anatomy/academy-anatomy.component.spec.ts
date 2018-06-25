import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyAnatomyComponent } from './academy-anatomy.component';

describe('AcademyAnatomyComponent', () => {
  let component: AcademyAnatomyComponent;
  let fixture: ComponentFixture<AcademyAnatomyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademyAnatomyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyAnatomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
