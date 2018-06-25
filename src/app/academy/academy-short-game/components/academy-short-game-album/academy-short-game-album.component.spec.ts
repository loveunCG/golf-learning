import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyShortGameAlbumComponent } from './academy-short-game-album.component';

describe('AcademyShortGameAlbumComponent', () => {
  let component: AcademyShortGameAlbumComponent;
  let fixture: ComponentFixture<AcademyShortGameAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademyShortGameAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyShortGameAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
