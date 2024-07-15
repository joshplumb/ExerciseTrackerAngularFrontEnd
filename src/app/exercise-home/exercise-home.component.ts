import { Component, Input } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { ExerciseComponent } from '../exercise-component/exercise-component.component';
import { Exercise } from '../exercise-model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercise-home',
  standalone: true,
  imports: [ RouterModule, ExerciseComponent, CommonModule],
  templateUrl: './exercise-home.component.html',
  styleUrl: './exercise-home.component.css'
})
export class ExerciseHomeComponent {

      public exercises: Exercise [] = []
      public isProgress: boolean = false;

      constructor(private exerciseService: ExerciseService) {}

       getExercises(){
         this.isProgress = true;
         this.exerciseService.getAllExercises().subscribe({
           next: (res) => {
             this.exercises = res;
             this.isProgress = false;
           },
           error: (res) => {
             console.log(res);
             this.isProgress = false;
           }
         });
       }
      
      ngOnInit() {
        this.getExercises();
      }
}