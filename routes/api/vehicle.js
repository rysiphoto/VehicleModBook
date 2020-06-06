const router = require("express").Router();
const vehicleController = require("../../controllers/vehicleController");

// Matches with "/api/vehicle"
router.route("/vehicle")
  .get(vehicleController.findAll)
  .post(vehicleController.create);

// Matches with "/api/vehicle/:id"
router
  .route("/vehicle/:id")
  .get(vehicleController.findById)
  .put(vehicleController.update)
  .delete(vehicleController.remove);

module.exports = router;
