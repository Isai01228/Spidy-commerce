import joi from 'joi'

const messageSchema = joi.object({
    userName: joi.string().required(),
    mail: joi.string().required(),
    message: joi.string().required(),
    phone: joi.number().required()
})

    export default async(req, res, next) => {
        try {
            await messageSchema.validateAsync(req.body)
            next()
        } catch (error) {
            return res.status(500).json({
                msg: 'Message validate error'
            })
        }
    }