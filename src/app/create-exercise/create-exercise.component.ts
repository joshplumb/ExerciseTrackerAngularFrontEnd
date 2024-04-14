import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Exercise } from '../exercise-model';
import { ExerciseService } from '../exercise.service';
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

  // reactiveCreateForm = new FormGroup ({
  //   exerciseId: new FormControl(),
  //   exerciseName: new FormControl(),
  //   weight: new FormControl(),
  //   intensity: new FormControl(),
  //   repetitions: new FormControl(),
  //   notes: new FormControl(),
  //   date: new FormControl()
  // })

  submitNewExercise() {
    // const formData = this.reactiveCreateForm.value;
    // const newExercise: Exercise = {
    //   exerciseId: formData.exerciseId,
    //   exerciseName: formData.exerciseName,
    //   weight: formData.weight,
    //   intensity: formData.intensity,
    //   repetitions: formData.repetitions,
    //   notes: formData.notes,
    //   date: formData.date
    // }
    // this.exercisService.createExercise(newExercise);
    this.getPutPostDeleteService.createExercise(this.exercise);

  }
}