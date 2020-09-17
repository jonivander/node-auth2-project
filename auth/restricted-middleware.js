const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const secret = process.env.JWT_SECRET || "is it secret? is it safe?";

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: "Not allowed" })
            } else {
                req.jwt = decodedToken;

                next(); 
            }
        });
    } else {
        res.status(401).json({ message: "It's dangerous out there. You need a Token" });
    }
};