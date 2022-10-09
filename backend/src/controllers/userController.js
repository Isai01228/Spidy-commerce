import * as bcrypt from 'bcrypt'
import jwt from 'jwt-simple'
import UserModel from '../models/User.js'
import config from '../config/index.js'

const create = async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = {
            ...req.body,
            password: hashedPassword
        }
        const createdUser = await UserModel.create(newUser)
        return res.status(201).json( createdUser )
        } catch (error) {
        return res.status(500).json({ error })
    }
}

const login = async (req, res) => {
    const {password, email} = req.body
    try {
        const user = await UserModel.findOne({email})

        if (!user) {
            return res.status(401).json({
                msg: 'Wrong credentials'
            })
        }

        const compared = await bcrypt.compare(password, user.password)
        
        
        if (!compared) {
            return res.status(401).json({
                msg: 'wrong credentials'
            })
        }
        user.password = undefined
        const token = jwt.encode(user, config.token.secret)
        return res.json({
            msg: 'Login successfully', 
            token
        })
    } catch (err) {
        return res.status(500).json({
            msg: 'Login error',
            err
        })
    }
}

const updateById = async (req, res) => {
    const {role} = req.body
    if(role != 'admin') {
        return res.status(402).json({
            msg: 'No auth'
        })
    }
    try {
        const {id} = req.params
        const user = await UserModel.findByIdAndUpdate(id, req.body)
        return res.json({
            msg: 'Updated user',
            user
        })
    } catch (error) {
            return res.status(500).json({
            msg: 'Updated error user'
        })
    }
}


export {create, login, updateById}