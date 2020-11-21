import jwt from 'jsonwebtoken'
import userAuth from '../models/userAuth.js'


export default async (req, res) => {
    let token = req.header('authorization')
    if(token) {
        token = token.split(' ')[1]
    }
    try {
        const jwtDecode = jwt.decode(token, process.env.JWT_SECRET)
        const user = await userAuth.findOne({twitterHandle: jwtDecode.id})
        if(user) res.json(user)
        else res.sendStatus(404)   
    }
    catch(err) {
        res.sendStatus(401)
    }
}