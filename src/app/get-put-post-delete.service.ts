import { Injectable } from '@angular/core';
import { Exercise } from './exercise-model';
import { ExerciseService } from './exercise.service';

@Injectable({
  providedIn: 'root'
})
export class GetPutPostDeleteService {

  public exercises: Exercise [] = []

  public isProgress: boolean = false;

  constructor(private exerciseService: ExerciseService) { }

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
  getExerciseById(id: number){
    this.exerciseService.getExerciseByID(id).subscribe({
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
  createExercise(exercise: Exercise){
    this.exerciseService.createExercise(exercise).subscribe({
      next: (res: any) => {
        this.exercises = res.data.exercises;
        this.isProgress = false;
      },
      error: (res) => {
        console.log(res);
        this.isProgress = false;
      }
    })
  }
  updateExercise(exercise: Exercise){
    this.exerciseService.updateExercise(exercise).subscribe({
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
