import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPrimaryComponent } from './header-primary.component';

describe('HeaderPrimaryComponent', () => {
  let component: HeaderPrimaryComponent;
  let fixture: ComponentFixture<HeaderPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
