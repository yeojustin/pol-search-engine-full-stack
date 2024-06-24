// route after user presses login button
// authentication

const express = require('express');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const User = require('../models/Users'); 
const UserSessions = require('../models/UserSessions');
const AuditLogs = require('../models/AuditLogs');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const sessionToken = uuidv4();
        const loginTime = new Date();

        const userSession = await UserSessions.create({
            user_id: user.id,
            login_time: loginTime,
            is_active: true
        });

        await AuditLogs.create({
            user_id: user.id,
            action: 'User Login',
            details: `User ${user.username} logged in.`,
            timestamp: loginTime
        });

        res.cookie('session_token', sessionToken, { httpOnly: true, maxAge: 3600000 }); // 1 hour

        res.json({ redirectUrl: '/dashboard.html' });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
