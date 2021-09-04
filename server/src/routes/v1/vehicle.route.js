const express = require("express")
const validate = require('../../middlewares/validate');
const vehicleController = require("../../controllers/vehicle.controller")
const auth = require("../../middlewares/auth")

const router = express.Router()

router
    .route('/')
        .get(auth('getVehicle'), vehicleController.getVehicles)
        .post(auth('manageVehicle'), vehicleController.createVehicle)

module.exports = router;