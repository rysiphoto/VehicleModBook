let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/VehicleModBook");

let vehicleSeed = [
  {
    name: "Ryan Siverson",
    make: "Jeep",
    model: "Wrangler Unlimited",
    year: "2018",
    trim: "Rubicon",
    color: "Mojito!",
    vin: "232342353263tsdgsdgsgdfg"
  }, {
    name: "Ryan Siverson",
    make: "Jeep",
    model: "J20",
    year: "1978",
    trim: "Custom",
    color: "White",
    vin: "456234gsdereg5gsgdfg"
  }
]

db.Vehicle
  .remove({})
  .then(() => db.Vehicle.collection.insertMany(vehicleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });