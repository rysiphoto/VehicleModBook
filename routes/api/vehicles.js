const router = require("express").Router();
const vehiclesController = require("../../controllers/vehiclesController");

// Matches with "/api/vehicles"
router.route("/")
  .get(vehiclesController.findAll)
  .post(vehiclesController.create);

// Matches with "/api/vehicle/:id"
router
  .route("/:id")
  .get(vehiclesController.findById)
  .put(vehiclesController.update)
  .delete(vehiclesController.remove);

module.exports = router;
