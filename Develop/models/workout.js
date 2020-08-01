const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  // CODE HERE
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      //look out enum
      // match: ["resistance" || "cardio"],
      required: "Type of workout is required"
    },
    name: {
      type: String,
      trim: true,
      required: "Name of workout is required"
    },
    sets: {
      type: Number,
      required: "How many sets did you do?"
    },
    reps: {
      type: Number,
      required: "How many reps did you do?"
    },
    duration: {
      type: Number,
      required: "How long did you workout?"
    },
    weight: {
      type: Number,
      required: "How much did you lift?"
    },
    distance: {
      type: Number,
      required: "How far did you go?"
    }
  }]

},
//virtual property (total duration) [see dashboard on application for this]
{
  toJSON: {
    //include any virtual properties when data is requested
    virtuals: true
  }
}
);

//adds a dynamically created property to Schema
workoutSchema.virtual("totalDuration").get(function() {
  //"reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0)
})

workoutSchema.virtual("totalWeight").get(function() {
  //"reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.weight;
  }, 0)
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
