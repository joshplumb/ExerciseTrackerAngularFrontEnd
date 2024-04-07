import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExerciseHomeComponent } from './exercise-home/exercise-home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  ExerciseHomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExerciseTrackerAngularFrontEnd';
}
