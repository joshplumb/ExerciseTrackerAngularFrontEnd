import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Exercise } from '../exercise-model';
import { GetPutPostDeleteService } from '../get-put-post-delete.service';

@Component({
  selector: 'app-edit-exercise',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './edit-exercise.component.html',
  styleUrl: './edit-exercise.component.css'
})
export class EditExerciseComponent {

  exercise!: Exercise;
  
  constructor(private getPutPostDeleteInstance: GetPutPostDeleteService){
  }

  editExercise(){
    this.getPutPostDeleteInstance.updateExercise(this.exercise);
  }
}
