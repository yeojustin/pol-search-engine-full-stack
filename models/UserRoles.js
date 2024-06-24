// models/UserRoles.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // from config/database.js
const User = require('./Users');
const Role = require('./Roles');

const UserRoles = sequelize.define('user_roles', {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        primaryKey: true
    },
    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'id'
        },
        primaryKey: true
    }
}, {
    tableName: 'user_roles',
    timestamps: false
});

module.exports = UserRoles;
