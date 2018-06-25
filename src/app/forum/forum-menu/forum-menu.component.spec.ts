import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumMenuComponent } from './forum-menu.component';

describe('ForumMenuComponent', () => {
  let component: ForumMenuComponent;
  let fixture: ComponentFixture<ForumMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
