import axios from "axios";

export default {
  // Gets all vehicles
  getVehicles: function () {
    return axios.get("/api/vehicles");
  },
  // Gets the vehicle with the given id
  getVehicle: function (id) {
    return axios.get("/api/vehicles/" + id);
  },
  // Deletes the vehicle with the given id
  deleteVehicle: function (id) {
    return axios.delete("/api/vehicles/" + id);
  },
  // Saves a vehicle to the database
  saveVehicle: function (vehicleData) {
    return axios.post("/api/vehicles", vehicleData);
  }
};
