// sync.js
// for syncing and authenticating with postgres schema to do CRUD operations

const { sequelize } = require('./config/database');

async function syncDatabse() {
    try{
        await sequelize.sync({ force: false });
        // set force to true to drop existing tables and recreate them
        console.log('DB sync successfully');
    } catch (error) {
        console.error('Error synchronising DB');
    } finally {
        // to close databse connection or to clean up task
        if (sequelize) {
            await sequelize.close();
            console.log('Database connection closed.');
        }
    }
}

syncDatabse();

// only sync in testing env, or chnages in schema ie. creating or dropping new tables