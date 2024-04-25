import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
  exerciseId = 0;
  
  constructor(private exerciseService: ExerciseService, private getPutPostDeleteInstance: GetPutPostDeleteService, private route: ActivatedRoute, private router: Router){
  }

  editExercise(){
    this.getPutPostDeleteInstance.updateExercise(this.exercise);
    this.reloadCurrentRoute();
  }
  
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
}