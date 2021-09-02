const mongoose = require('mongoose');
const validator = require('validator');
const toJSON = require('./toJSON.plugin');

const stringRequired = {
    type:String,
    required:true
}
const numberequired = {
    type:Number,
    required:true
}

const vehicleTypeSchema = mongoose.Schema(
    {
        vehicleTypeName: {
            ...stringRequired, unique: true,
            trim: true,},
        parkingCharges:numberequired,
        monthlyDiscount:numberequired,
        createdBy: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

vehicleTypeSchema.plugin(toJSON);

const VehicleType = mongoose.model('VehicleType', vehicleTypeSchema);

module.exports = VehicleType;

