const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GarageSchema = new Schema({

  make: { type: String, required: true },
  model: { type: String, required: true },
  color: { type: String, required: true },
  year: { type: String, required: true },
  trim: { type: String, required: true },
  vin: { type: String, required: true }
});

const Garage = mongoose.model("Garage", GarageSchema);

module.exports = Garage;
