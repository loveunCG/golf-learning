import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumSidebarComponent } from './forum-sidebar.component';

describe('ForumSidebarComponent', () => {
  let component: ForumSidebarComponent;
  let fixture: ComponentFixture<ForumSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
