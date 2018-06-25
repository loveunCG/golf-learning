import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsTestimonialsComponent } from './pros-testimonials.component';

describe('ProsTestimonialsComponent', () => {
  let component: ProsTestimonialsComponent;
  let fixture: ComponentFixture<ProsTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
