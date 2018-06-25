import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademySwingSecondComponent } from './academy-swing-second.component';

describe('AcademySwingSecondComponent', () => {
  let component: AcademySwingSecondComponent;
  let fixture: ComponentFixture<AcademySwingSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademySwingSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademySwingSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
