import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Exercise } from '../exercise-model';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-edit-exercise',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './edit-exercise.component.html',
  styleUrl: './edit-exercise.component.css'
})
export class EditExerciseComponent {

  exercise!: Exercise;
  exerciseId = 0;

  isProgress: boolean = true;
  
  constructor(private exerciseService: ExerciseService, private route: ActivatedRoute, private router: Router){
  } 

  // the reloadCurrentRoute function would do well to be made into an async operation so that it can await the service call
  editExercise(){
    this.updateExercise(this.exercise);
    this.reloadCurrentRoute();
  }

  updateExercise(exercise: Exercise){
    this.exerciseService.updateExercise(this.exercise).subscribe({
      next: (res) => {
        this.exercise = res;
        this.isProgress = false;
      },
      error: (res) => {
        console.log(res);
        this.isProgress = false;
      }
    })
  }
  
  // possible memory leak here because i never unsubscribe from the observable
  populateInputFields(id: number){
    this.exerciseService.getExerciseByID(id).subscribe(formData => {
      this.exercise = formData;
    })
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

  ngOnInit()
  {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.populateInputFields(id);
    })
  }
  ngOnDestroy()
  {
    // Im not sure that in this version of angular that I need to actually manually unsubscribe upon destroy/garbage collection
    // this.route.params.unsubscribe();
  }
}