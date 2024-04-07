import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseHomeComponent } from './exercise-home.component';

describe('ExerciseHomeComponent', () => {
  let component: ExerciseHomeComponent;
  let fixture: ComponentFixture<ExerciseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
