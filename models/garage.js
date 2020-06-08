const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GarageSchema = new Schema({
  year: { Number },
  make: { type: String, required: true },
  model: { type: String, required: true },
  Trim: { type: String, required: true },
  Color: { type: String, required: true },
  pdate: { type: Date, default: Date.now },
  vin: { type: String, required: true }
});

const Garage = mongoose.model("Garage", GarageSchema);

module.exports = Garage;
