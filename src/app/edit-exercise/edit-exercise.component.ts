import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Exercise } from '../exercise-model';
import { ExerciseService } from '../exercise.service';
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
  route: ActivatedRoute = inject(ActivatedRoute);
  exerciseId = 0;
  
  constructor(private exerciseService: ExerciseService, private getPutPostDeleteInstance: GetPutPostDeleteService){
    
  }

  // const exerciseId = parseInt(this.route.snapshot.params['id'], 10);
  //   this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
  //     this.housingLocation = housingLocation;
  //   });

  editExercise(){
  this.getPutPostDeleteInstance.updateExercise(this.exercise);

  }

  
  populateInputFields(){
  }
}
