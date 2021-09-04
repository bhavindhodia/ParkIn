const express = require("express")
const auth = require("../../middlewares/auth")
const passport=require('passport')
const router = express.Router()

// Return user data
router.get('/', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    if (!req.user) {
        res.json({
            username: 'nobody'
        })
    }

    res.json({
        name: req.user.name
    })
})
//router.get('/', auth("getUsers"))
//router.post('/', auth('manageVehicleType'), vehicleTypeController.createType)
module.exports = router;