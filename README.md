- This is a project that aims to let people track their workouts in a more convenient way (work in progress)
- I have an inbound and outbound service set up.
- The inbound service is simply called exercise.service, and the outbound service is called get-put-post-delete.service.
- My code doesn't closely follow DRY principles unfortunately. Due to how I abstracted out each exercise as their own exercise-component instance inside of the exercise-home-component template,
    it was hard for me to figure out how to give all classes access to the necessary inbound service methods.
- As of right now, the exercise-home component has a copy of the getExercises() method from the exercise.service.
- The CSS styling is a work in progress alongside the edit functionality, which doesn't work at all right now.
- The API backend is .NET and is running on entity framework and C#
- The database is just a local db on my pc that I work with using ssms
