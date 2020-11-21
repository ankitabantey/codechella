import jwt from 'jsonwebtoken'



export function createToken(userID) {
    return jwt.sign({
        id: userID,
    }, process.env.JWT_SECRET, {expiresIn: '1 year'});
};

