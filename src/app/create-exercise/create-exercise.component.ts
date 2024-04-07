import { Component, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Exercise } from '../exercise-model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-exercise',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './create-exercise.component.html',
  styleUrl: './create-exercise.component.css'
})
export class CreateExerciseComponent {
  @Input() exercise: Exercise = {
    exerciseId:0, 
    exerciseName:"", 
    weight:0, 
    intensity: 0,
    repetitions: 0,
    notes: "",
    date: new Date()
  };

  reactiveCreateForm = new FormGroup ({
    exerciseName: new FormControl(),
    weight: new FormControl(),
    intensity: new FormControl(),
    repetitions: new FormControl(),
    notes: new FormControl(),
    date: new FormControl()
  })


@Output() exerciseCreated = new EventEmitter<Exercise>();

submitApplication() {
  this.exercise = this.reactiveCreateForm.value;
  this.exerciseCreated.emit(this.exercise);
}
}
