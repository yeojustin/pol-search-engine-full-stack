// models/index.js

const sequelize = require('../config/database');
const Users = require('./Users');
const Roles = require('./Roles');
const UserRoles = require('./UserRoles'); // Corrected from UserRole
const Permissions = require('./Permissions');
const RolePermissions = require('./RolePermissions');
const UserSessions = require('./UserSessions');
const AuditLogs = require('./AuditLogs'); // Corrected from AuditLog

// Define relationships
Users.belongsToMany(Roles, { through: UserRoles, foreignKey: 'user_id' });
Roles.belongsToMany(Users, { through: UserRoles, foreignKey: 'role_id' });

Roles.belongsToMany(Permissions, { through: RolePermissions, foreignKey: 'role_id' });
Permissions.belongsToMany(Roles, { through: RolePermissions, foreignKey: 'permission_id' });

Users.hasMany(UserSessions, { foreignKey: 'user_id' });
UserSessions.belongsTo(Users, { foreignKey: 'user_id' });

Users.hasMany(AuditLogs, { foreignKey: 'user_id' });
AuditLogs.belongsTo(Users, { foreignKey: 'user_id' });

module.exports = {
    sequelize,
    Users, 
    UserRoles,
    Permissions,
    RolePermissions,
    UserSessions,
    AuditLogs
};
