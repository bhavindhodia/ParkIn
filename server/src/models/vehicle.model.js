const { boolean } = require('joi');
const mongoose = require('mongoose');
const toJSON = require('./toJSON.plugin')

const reqString ={
    type:String,
    required:true
}

const vehicleSchema = mongoose.Schema(
    {
        vehicleType: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'VehicleType',
            required: true,
        },
        owner:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:"User",
            required:true
        },
        vehicleName:reqString,
        vehicleNo:reqString,
        parkingStatus:{type:Boolean,default:false}
    },
    {
        timestamps: true,
    }
);

vehicleSchema.plugin(toJSON);

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
