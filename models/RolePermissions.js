// models/RolePermissions.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Roles = require('./Roles');
const Permissions = require('./Permissions');

const RolePermissions = sequelize.define('role_permissions', {
    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Roles,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    permission_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Permissions,
            key: 'id'
        },
        onDelete: 'CASCADE'
    }
}, {
    tableName: 'role_permissions',
    timestamps: false
});

module.exports = RolePermissions;
