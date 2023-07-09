import fs from 'fs'
import jwt from 'jsonwebtoken'

const getToken = (data) => {
    console.log(`data: ${data}`)
    let privateKey = fs.readFileSync(process.env.PRIVATE_KEY);
    let expired = parseInt(process.env.TOKEN_EXPIRED)
    return jwt.sign(data, privateKey, { algorithm: 'RS256', expiresIn: expired })
}

export default getToken