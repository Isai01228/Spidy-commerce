import joi from "joi";

const userSchema = joi.object({
    userName: joi.string().required(),
    lastName: joi.string().required(),
    phone: joi.number().required(),
    role: joi.string().optional().valid('user', 'admin'),
})

export default async (req, res, next) => {
    try {
        await userSchema.validateAsync(req.body)
        next()
    } catch (err) {
        return res.status(400).json({ err })
    }
}