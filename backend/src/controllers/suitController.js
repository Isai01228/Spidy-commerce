import {Suit} from '../models/index.js'

const   returnError = (msg, res) => {
    return res.status(500).json({
        msg
    })
}

const createSuit = async(req, res) =>{
    try {
        const newSuit = await Suit.create(req.body)
        return res.json({
            msg: 'New suit created',
            suit: newSuit
        })
    } catch (error) {
        if (process.env.DB_Name  === 'test') {
            console.log(error);
        }
        return returnError('Error to create suit', res)
    }
}

const getAllSuits = async(_, res) =>{
    try {
        const suits = await Suit.find()
        return res.status(200).json({
            msg: 'Suits obtained',
            suits
        })
    } catch (error) {
        return returnError('Error to obtain suits', res)
    }
}

const getSuitById = async (req, res) => {
    try {
        const {id} = req.params
        const suit = await Suit.findById(id)
        if (!suit) {
            return res.status(404).json({
                msg: 'Suit not  found'
            })
        }
        return res.json({
            msg: 'Traje encontrado',
            suit
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error to find the suit'
        })
    }
}

const updateSuitById = async (req, res) => {
    try {
        const {id} = req.params
        const updateSuit = await Suit.findByIdAndUpdate(id, req.body)
        return res.status(200).json({
            msg: 'Update suit successfully',
            updateSuit
        })
    } catch (error) {
        return res.status(404).json({
            msg: 'Error to update the suit'
        })
    }
}

const deletSuitById = async (req, res) => {
    try {
        const {id} = req.params
        const suitDeleted = await Suit.findByIdAndDelete(id)
        return res.status(200).json({
            msg: 'Suit deleted successfully',
            suitDeleted
        })
    } catch (error) {
        return res.status(404).json({
            msg: 'Error to find the suit'
        })
    }
}

export {
    createSuit, getAllSuits, getSuitById, updateSuitById, deletSuitById 
}