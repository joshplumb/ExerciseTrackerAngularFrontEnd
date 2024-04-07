import { Component, Injectable } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { ExerciseComponent } from '../exercise-component/exercise-component.component';
import { Exercise } from '../exercise-model';
import { OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExerciseListComponent } from '../exercise-list/exercise-list.component';

@Component({
  selector: 'app-exercise-home',
  standalone: true,
  imports: [ RouterModule, ExerciseComponent, CommonModule, ExerciseListComponent],
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
ngOnInit(){
  this.getExercises();
  //this.getExerciseById();
  //this.deleteExercise();
  //this.createExercise();
  //this.updateExercise();
}
}
