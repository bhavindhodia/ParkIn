const express = require('express')
const authRoute = require('./auth.route')
const vehicleTypeRoute = require("./vehicleType.route")
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
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;