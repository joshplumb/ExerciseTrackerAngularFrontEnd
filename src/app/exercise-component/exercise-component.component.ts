import { Component, Input } from '@angular/core';
import { Exercise } from '../exercise-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercise-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-component.component.html',
  styleUrl: './exercise-component.component.css'
})
export class ExerciseComponent {
  @Input() exercise: Exercise = {
    exerciseId:0, 
    exerciseName:"", 
    weight:0, 
    intensity: 0,
    repetitions: 0,
    notes: "",
    date: new Date()
  };
}
