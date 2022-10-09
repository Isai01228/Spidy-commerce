import joi from 'joi'

const userSchema = joi.object({
    userName: joi.string().required(),
    idNum: joi.number().required(),
    lastName: joi.string().required(),
    phone: joi.number().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    role: joi.string().valid('user', 'admin').default('user')
})

export default async(req, res, next) => {
    try {
        await userSchema.validateAsync(req.body)
        next()
    } catch (err) {
        return res.status(400).json({err})
    }
}