const router = require("express").Router();
const vehicleRoutes = require("./vehicle");

// vehicle routes
router.use("/vehicle", vehicleRoutes);

module.exports = router;


