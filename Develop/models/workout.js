const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // CODE HERE
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        match: ["resistance" || "cardio"],
        required: "Type of workout is required",
      },
      name: {
        type: String,
        trim: true,
        required: "Name of workout is required",
      },
      sets: {
        type: Number,
        required: "How many sets did you do?",
      },
      reps: {
        type: Number,
        required: "How many reps did you do?",
      },
      duration: {
        type: Number,
        required: "How long did you workout?",
      },
      distance: {
        type: Number,
        required: "How far did you go?",
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
