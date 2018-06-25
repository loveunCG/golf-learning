import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyShortGameComponent } from './academy-short-game.component';

describe('AcademyShortGameComponent', () => {
  let component: AcademyShortGameComponent;
  let fixture: ComponentFixture<AcademyShortGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademyShortGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyShortGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
