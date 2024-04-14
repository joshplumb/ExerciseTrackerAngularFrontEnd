import { Component, Input } from '@angular/core';
import { Exercise } from '../exercise-model';
import { ExerciseService } from '../exercise.service';
import { CommonModule } from '@angular/common';
import { GetPutPostDeleteService } from '../get-put-post-delete.service';

@Component({
  selector: 'app-exercise-component',
  standalone: true,
  imports: [CommonModule],
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

  constructor(private exerciseService: ExerciseService, public getPutPostDeleteInstance: GetPutPostDeleteService) {
  }

 
}
