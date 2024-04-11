import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Exercise } from '../exercise-model';
import { ExerciseService } from '../exercise.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-exercise',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './create-exercise.component.html',
  styleUrl: './create-exercise.component.css'
})
export class CreateExerciseComponent {

  constructor(private exercisService: ExerciseService){
    this.exercise = {
      exerciseId: 0, 
      exerciseName:"", 
      weight:0, 
      intensity: 0,
      repetitions: 0,
      notes: "",
      date: new Date()
    };
  }

  @Input() exercise: Exercise;

  reactiveCreateForm = new FormGroup ({
    exerciseId: new FormControl(),
    exerciseName: new FormControl(),
    weight: new FormControl(),
    intensity: new FormControl(),
    repetitions: new FormControl(),
    notes: new FormControl(),
    date: new FormControl()
  })

  submitApplication() {
    const formData = this.reactiveCreateForm.value;
    const newExercise: Exercise = {
      exerciseId: formData.exerciseId,
      exerciseName: formData.exerciseName,
      weight: formData.weight,
      intensity: formData.intensity,
      repetitions: formData.repetitions,
      notes: formData.notes,
      date: formData.date
    }
    this.exercisService.createExercise(newExercise);
  }
}