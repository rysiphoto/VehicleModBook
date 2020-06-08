const router = require("express").Router();
const garageController = require("../../controllers/garageController");

// Matches with "/api/vehicle"
router.route("/vehicle")
  .get(garageController.findAll)
  .post(garageController.create);

// Matches with "/api/vehicle/:id"
router
  .route("/vehicle/:id")
  .get(garageController.findById)
  .put(garageController.update)
  .delete(garageController.remove);

module.exports = router;
