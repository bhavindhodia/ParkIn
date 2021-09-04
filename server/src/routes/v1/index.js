const express = require('express')
const authRoute = require('./auth.route')
const vehicleTypeRoute = require("./vehicleType.route")
const userRoute=require("./user.route")
const vehicleRoute=require('./vehicle.route')
const router = express.Router();

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute,
    },
    {
        path: '/vehicleType',
        route: vehicleTypeRoute,
    },
    {
        path:'/vehicle',
        route:vehicleRoute
    },
    {
        path:'/user',
        route:userRoute
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;