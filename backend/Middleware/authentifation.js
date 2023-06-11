import { jwt } from 'jsonwebtoken';

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

module.exports = {
    generateToken,
    authenticateToken
}