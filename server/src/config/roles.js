const allRoles = {
    user: ['manageVehicle'],
    admin: ['getUsers', 'manageUsers','manageVehicleType'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
    roles,
    roleRights,
};
