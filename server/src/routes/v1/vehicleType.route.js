const express = require("express")
const vehicleTypeController = require("../../controllers/vehicleType.controller")
const auth = require("../../middlewares/auth")

const router = express.Router()

router.get('/', vehicleTypeController.getType)
router.post('/', auth('manageVehicleType'), vehicleTypeController.createType)
module.exports = router;


