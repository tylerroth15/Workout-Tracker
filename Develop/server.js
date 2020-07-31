// const express = require("express");
// const logger = require("morgan");
// const mongoose = require("mongoose");
// const path = require("path");

// const PORT = process.env.PORT || 3000;

// const Workout = require("./models/workoutModel.js");
// const app = express();

// app.use(logger("dev"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// const databaseURL = "workoutTracker";
// const collections= ['workouts'];

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

// // Routes
// app.get("/", (req, res) => {
//     res.send(path.join(__dirname + "./public/index.html"));
// });

// //get routes for exercise & stats
// app.get("/exercise", (req, res) => {
//   res.send(path.join(__dirname + "./public/exercise.html"));
// });

// // Route to post our form submission to mongoDB via mongoose
// app.post("/submit", ({body}, res) => {
//     // Create a new user using req.body
//     const workout = new Workout(body);
//      // Update this route to run the `setFullName` and `lastUpdatedDate` methods before creating a new User
//     // You must create these methods in the model.
  
//     Workout.create(user)
//       .then(dbWorkout => {
//         // If saved successfully, send the the new User document to the client
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         // If an error occurs, send the error to the client
//         res.json(err);
//       });
//   });

// app.listen(PORT, () => {
//     console.log(`App running on port ${PORT}!`);
// });

const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethods", { useNewUrlParser: true, useUnifiedTopology: true });

const db = require("./models");;

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
