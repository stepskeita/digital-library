require('dotenv/config')
const express = require('express');
const jwt = require('jsonwebtoken');
const UserRouter = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../Books Entity/DBModels');

User.Router.post('/', (req, res) => {
    res.status(200).json({ msg: 'Login successful.' });
})

function generateToken(user) {
    const payload = {
        userId: user._id,
        isAdmin: user.isAdmin
    };
    const options = {
        expiresIn: '1h'
    };
    return jwt.sign(payload, process.env.JWT_SECRET, options);
}

UserRouter.post('/signup', async(req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: '${email} already exists.' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            isAdmin: false
        });
        await newUser.save();
        res.status(201).json({ msg: 'User registered successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error.' });
    }
});
router.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }
        const token = generateToken(user);
        res.status(200).json({ message: 'Login successful.', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        if (error) {
            return res.status(403).json({ message: 'Invalid token.' });
        }

        req.user = user;
        next();
    });
}
router.get('/me', authenticateToken, (req, res) => {
    const userId = req.user.userId;

    User.findById(userId, (error, user) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'Server error.' });
        }

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        res.status(200).json({ message: 'User profile retrieved.', user });
    });
});

router.put('/me', authenticateToken, async(req, res) => {
    const userId = req.user.userId;
    const updatedProfile = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        user.profile = updatedProfile;

        await user.save();

        res.json({ message: 'User profile updated successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
});

module.exports = UserRouter;