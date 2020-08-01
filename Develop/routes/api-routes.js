let db = require("../models");

module.exports = function(app) {

    // Used by api.js to get last workout
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    
    // Creates a new workout in the workout database
    app.post("/api/workouts", async (req, res)=> {
        try{
            const response = await db.Workout.create({type: "workout"})
            res.json(response);
        }
        catch(err){
            console.log("error occurred creating a workout: ", err)
        }
    })

    // Used by api.js to add an exercise to a workout
    app.put("/api/workouts/:id", ({body, params}, res) => {
        const workoutId = params.id;

        // gets all the currently saved exercises in the current workout
        db.Workout.findByIdAndUpdate(workoutId, {$push: {exercises: body}}, {new: true})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).sort({day: -1}).limit(7)
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    }); 
};