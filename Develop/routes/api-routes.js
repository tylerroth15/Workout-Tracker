// let db = require("../models");
const router = require("express").Router();
const Workout = require("../models/workout.js");

// module.exports = function(app) {

//     // Used by api.js to get last workout
//     app.get("/api/workouts", (req, res) => {
//         db.Workout.find({})
//         .then(workout => {
//             res.json(workout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
//     });
    
//     // Creates a new workout in the workout database
//     app.post("/api/workouts", async (req, res)=> {
//         try{
//             const response = await db.Workout.create({type: "workout"})
//             res.json(response);
//         }
//         catch(err){
//             console.log("error occurred creating a workout: ", err)
//         }
//     })

//     // Used by api.js to add an exercise to a workout
//     app.put("/api/workouts/:id", ({body, params}, res) => {
//         const workoutId = params.id;
//         let savedExercises = [];

//         // gets all the currently saved exercises in the current workout
//         db.Workout.find({_id: workoutId})
//             .then(dbWorkout => {
//                 savedExercises = dbWorkout[0].exercises;
//                 res.json(dbWorkout[0].exercises);
//                 let allExercises = [...savedExercises, body]
//                 console.log(allExercises)
//                 updateWorkout(allExercises)
//             })
//             .catch(err => {
//                 res.json(err);
//             });

//         function updateWorkout(exercises){
//             db.Workout.findByIdAndUpdate(workoutId, {exercises: exercises}, function(err, doc){
//             if(err){
//                 console.log(err)
//             }

//             })
//         }
            
//     })

//     app.get("/api/workouts/range", (req, res) => {
//         db.Workout.find({})
//         .then(workout => {
//             res.json(workout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
//     }); 
// };

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts", (req, res)=> {
    Workout.find()
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", ({query}, res)=> {
    Workout.find({ day: {$gte: query.start, $lte: query.end}
    })
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

router.delete("/api/workouts", ({ body}, res) =>{
    Workout.findByIdAndDelete(body.id)
    .then(() => {
        res.json(true);
    })
    .catch(err => {
        res.json(err);
    });
}); 

module.exports = router;