import getToken from "@/helpers/getToken"
import User from "@/models/user"
import bcrypt from 'bcrypt'
import { Op } from "sequelize"

const post = async (req, res) => {
    try {
        const { email, password } = req.body
        
        const user = await User.findOne({
            where: { email: email }
        })

        let isMatch = await bcrypt.compare(password, user.password_hash)

        if (user && user !== {} && isMatch) {
            const token = getToken(user.toJSON())
            res.json({ token: token })
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

export default (req, res) => {
    req.method === "POST"
        ? post(req, res)
        : res.status(404).json({ message: 'api not found' })
}