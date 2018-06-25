import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdacemyMenuComponent } from './adacemy-menu.component';

describe('AdacemyMenuComponent', () => {
  let component: AdacemyMenuComponent;
  let fixture: ComponentFixture<AdacemyMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdacemyMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdacemyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
