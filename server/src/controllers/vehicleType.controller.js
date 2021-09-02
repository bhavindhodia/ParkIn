const { VehicleType } = require("../models");
const catchAsync = require("../utils/catchAsync")
const httpStatus = require('http-status')

const getType = catchAsync(async (req, res) => {
    const vehicleType = await VehicleType.find({})
    res.send({ ok: true, vehicleType })
})

const createType = catchAsync(async(req,res)=>{
    const createdBy=req.user._id
    const payload = { createdBy,...req.body}
    const vehicleType = await VehicleType.create(payload)
    res.status(httpStatus.CREATED).send({ ok:true, vehicleType });
})

module.exports = {getType,createType}