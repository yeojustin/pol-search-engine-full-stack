// model/Role.js

const { DataTypes } = require('sequelize');
const sequalize = require('../config/database');

const Roles = sequelize.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    role_name: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'roles',
    timestamps: false
});

module.exports = Roles;