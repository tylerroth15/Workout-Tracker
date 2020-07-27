const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Name of work out is required"
    },
    type: {
        type: String,
        trim: true,
        required: "Type of workout is required"
    },
    sets: {
        type: Number,
        required: "How many sets did you do?"
    },
    reps: {
        type: Number,
        required: "How many sets did you do?"
    }, 
    duration: {
        //can you use time for type?
        type: Number, 
        required: "How far long you go?"
    }, 
    distance: {
        type: Number, 
        required: "How far did you go?"
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;