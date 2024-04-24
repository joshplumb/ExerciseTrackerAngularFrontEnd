import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Exercise } from '../exercise-model';
import { FormsModule } from '@angular/forms';
import { GetPutPostDeleteService } from '../get-put-post-delete.service';

@Component({
  selector: 'app-create-exercise',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './create-exercise.component.html',
  styleUrl: './create-exercise.component.css'
})
export class CreateExerciseComponent {

  constructor(private getPutPostDeleteService: GetPutPostDeleteService){
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

  exercise: Exercise = {
    exerciseId:0, 
    exerciseName:"", 
    weight:0, 
    intensity: 0,
    repetitions: 0,
    notes: "",
    date: new Date()
  };

  submitNewExercise() {
    this.getPutPostDeleteService.createExercise(this.exercise);
    window.location.reload();

  }
}