import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyShortGamePlayerComponent } from './academy-short-game-player.component';

describe('AcademyShortGamePlayerComponent', () => {
  let component: AcademyShortGamePlayerComponent;
  let fixture: ComponentFixture<AcademyShortGamePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademyShortGamePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyShortGamePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
