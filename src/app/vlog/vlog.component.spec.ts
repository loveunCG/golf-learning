import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlogComponent } from './vlog.component';

describe('VlogComponent', () => {
  let component: VlogComponent;
  let fixture: ComponentFixture<VlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
