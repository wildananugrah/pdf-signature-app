async function validateToken(token) {
    var cert = fs.readFileSync('./keys/certificate.crt')
    return new Promise((resolve, reject) => {
        jwt.verify(token, cert, { algorithms: ['RS256'] }, (err, decoded) => {
            if (err) reject(err)
            else resolve(decoded)
        })
    })
}

export default async () => {
    let decodedToken = await validateToken(token)
    decodedToken.exp = new Date(decodedToken.exp * 1000)
    decodedToken.iat = new Date(decodedToken.iat * 1000)
    return decodedToken
}