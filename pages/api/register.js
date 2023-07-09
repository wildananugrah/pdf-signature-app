import User from "@/models/user"
import bcrypt from 'bcrypt'

const post = async (req, res) => {
    const { first_name, last_name, email, password, date_of_birth } = req.body;
    try {
        const password_hash = await bcrypt.hash(password, 10);
        const user = await User.create({ first_name, last_name, email, password_hash, date_of_birth, created_at: new Date(), updated_at: new Date() });
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export default (req, res) => {
    req.method === "POST"
        ? post(req, res)
        : res.status(404).json({ message: 'api not found' })
}