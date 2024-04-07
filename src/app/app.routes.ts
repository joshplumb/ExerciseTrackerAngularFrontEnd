import { Routes } from '@angular/router';
import { ExerciseHomeComponent } from './exercise-home/exercise-home.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { EditExerciseComponent } from './edit-exercise/edit-exercise.component';

export const routes: Routes = [
    {
        path: '', 
        component: ExerciseHomeComponent,
        title: 'ExerciseTrackerAngularFrontEnd'
    },
    {
        path: 'create-exercise', 
        component: CreateExerciseComponent,
    },
    {
        path: 'edit-exercise', 
        component: EditExerciseComponent,
    }
];