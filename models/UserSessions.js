// models/UserSession.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // from config/database.js
const User = require('./Users');

const UserSessions = sequelize.define('user_sessions', {
    session_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    login_time: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    logout_time: {
        type: DataTypes.DATE,
        allowNull: true
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'user_sessions',
    timestamps: false
});

module.exports = UserSessions;