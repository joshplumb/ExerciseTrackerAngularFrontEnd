import { Component, Input } from '@angular/core';
import { Exercise } from '../exercise-model';
import { ExerciseService } from '../exercise.service';
import { CommonModule } from '@angular/common';
import { GetPutPostDeleteService } from '../get-put-post-delete.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-exercise-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './exercise-component.component.html',
  styleUrl: './exercise-component.component.css'
})
export class ExerciseComponent {
  @Input() exercise!: Exercise;

  // @Input() exercise: Exercise = {
  //   exerciseId:0, 
  //   exerciseName:"", 
  //   weight:0, 
  //   intensity: 0,
  //   repetitions: 0,
  //   notes: "",
  //   date: new Date()
  // };
  
  public isProgress: boolean = false;
  public exercises: Exercise [] = []

  constructor(public getPutPostDeleteInstance: GetPutPostDeleteService) {
  }

  async deleteAndReload(exerciseId: number)
  {
    this.isProgress = true;
    await this.getPutPostDeleteInstance.deleteExercise(exerciseId);
    this.isProgress = false;
    window.location.reload();
  }
 
}
