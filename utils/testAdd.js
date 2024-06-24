// utils/testAdd.js

const bcrypt = require('bcrypt');
const { sequelize, Users } = require('../models'); // Adjusted import path

async function addMainUser() {
    try {
        // Check database connection
        await sequelize.authenticate();
        console.log("Connection with database established");

        // Hash the password
        const hashedPassword = await bcrypt.hash("password", 10);

        // Create a new user
        const mainUser = await Users.create({
            username: "main",
            password: hashedPassword
        });
        
        console.log('Main user created successfully:', mainUser.toJSON());

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        await sequelize.close();
        console.log('Database connection closed.');
    }
}

addMainUser();