import jwt from 'jsonwebtoken'
import userAuth from '../models/userAuth.js'


export default async (req, res) => {
    console.log('called getCurrentUser')
    const user = await getUser(req)
    if (user) res.json(user)
    else res.sendStatus(401)

}

async function getUser(req) {
    let token = req.header('Authorization')
    if (token) {
        token = token.split(' ')[1]
    }
    try {
        const jwtDecode = jwt.decode(token, process.env.JWT_SECRET)
        const user = await userAuth.findOne({ twitterHandle: jwtDecode.id })
        return user
    }
    catch (err) {
        return null
    }
}
export {getUser}