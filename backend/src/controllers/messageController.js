import {Suit, Message} from '../models/index.js'

const returnError = (msg, res) => {
    return res.status(500).json({
        msg
    })
}

const crateMessage = async(req, res) => {
    try {
        const newMessage = await Message.create(req.body)
        const suit = await Suit.findById(req.params.id)
        suit.messages.push(newMessage.id)
        await suit.save()
        return res.status(200).json({
            msg: 'Message created',
            message: newMessage
        })
    } catch (error) {
        return returnError('Error to create message', res)
    }
}

const getMessageById = async(req, res) => {
    try {
        const message = await Suit.findById(req.params.id).populate('messages')
        const messages =  message.messages
        return res.json({
            msg: 'Messages obtained about the suit',
            messages
        })
    } catch (error) {
        return returnError('Messages not found', res)
    }
}

const getAllMsg = async(_, res) => {
    try {
        const messages = await Message.find()
        return res.json({
            msg: 'Messages obtained',
            messages
        })
    } catch (error) {
        return returnError('Error to obtain messages', res)
    }
}

const deleteMsgById = async (req, res) => {
    try {
        const { id, messageId } = req.params
        const foundSuit = await Suit.findById(id)
        const message = await Message.findByIdAndDelete(messageId)

        const index = foundSuit.messages.indexOf(messageId)
        if (index > -1) {
            foundSuit.messages.splice(index, 1)
            await foundSuit.save()
        }
        return res.status(200).json({
            msg: 'Message delete successfully',
            message
        })
    } catch (error) {
        return res.status(404).json({
            msg: 'Message not found'
        })
    }
}

export {crateMessage, getMessageById, getAllMsg, deleteMsgById}