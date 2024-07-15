import { Component, Input } from '@angular/core';
import { Exercise } from '../exercise-model';
import { ExerciseService } from '../exercise.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

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

  currentRouter = this.router.url;

  constructor(private exerciseService: ExerciseService, public router: Router, public route: ActivatedRoute) {
  }

  deleteExerciseInComponent(exerciseId: number)
  {
    this.isProgress = true;
    this.deleteExercise(exerciseId);
    this.isProgress = false;
    window.location.reload();
  }
  deleteExercise(id: number){
    this.exerciseService.deleteExercise(id).subscribe({
      next: (res) => {
        this.exercises = res;
        this.isProgress = false;
      },
      error: (res) => {
        console.log(res);
        this.isProgress = false;
      }
    })
  }
}
