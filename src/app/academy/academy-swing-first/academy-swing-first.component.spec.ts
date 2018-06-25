import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademySwingFirstComponent } from './academy-swing-first.component';

describe('AcademySwingFirstComponent', () => {
  let component: AcademySwingFirstComponent;
  let fixture: ComponentFixture<AcademySwingFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademySwingFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademySwingFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
