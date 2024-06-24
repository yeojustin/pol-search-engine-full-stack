// models/Permissions.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Permissions = sequelize.define('permissions', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    permission_name: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
}, {
    tableName: 'permissions',
    timestamps: false
});

module.exports = Permissions;