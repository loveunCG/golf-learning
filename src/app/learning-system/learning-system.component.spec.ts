import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LearningSystemComponent } from './learning-system.component';

describe('LearningSystemComponent', () => {
  let component: LearningSystemComponent;
  let fixture: ComponentFixture<LearningSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [ LearningSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
