const express = require("express")
const validate = require('../../middlewares/validate');
const vehicleTypeController  =require("../../controllers/vehicleType.controller")
const auth = require("../../middlewares/auth")

const router = express.Router()

router.get('/',vehicleTypeController.getType)
router.post('/', auth('manageVehicleType'),vehicleTypeController.createType)
module.exports = router;