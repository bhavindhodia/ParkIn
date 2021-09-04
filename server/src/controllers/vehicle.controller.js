const { Vehicle} = require("../models");
const catchAsync = require("../utils/catchAsync")
const httpStatus = require('http-status')

const getVehicles = catchAsync(async (req, res) => {
    const vehicle = await Vehicle.find({})
    res.send({ ok: true, vehicle })
})

const createVehicle = catchAsync(async (req, res) => {
    const owner = req.user._id
    const payload = { owner, ...req.body }
    const vehicle = await Vehicle.create(payload)
    res.status(httpStatus.CREATED).send({ ok: true, vehicle });
})

module.exports = { getVehicles, createVehicle }