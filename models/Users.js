// models/Users.js

// to refelct the schema in the Postgres for usersdb

// imports
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // from config/database.js

const Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'users',
    timestamps: false // since tbale doesnt use createdat and updatedat fields
});

module.exports = Users;