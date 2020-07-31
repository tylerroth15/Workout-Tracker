const router = require("express").Router();
const path = require("path");

// module.exports = function(app) {
  // Used when"Continue Workout" or "new Workout" is clicked in index.html
  router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
// };

module.exports = router;