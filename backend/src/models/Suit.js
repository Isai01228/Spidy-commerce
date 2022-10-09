import mongoose from "mongoose"

const suitSchema = new mongoose.Schema({
    description: String,
    suitName: String,
    color: String,
    price: {
        type: String,
        required: true
    },
    images: [{
        type: String,
        required: true
    }],
    size: {
        type: String,
        required: true
    },
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
})

export default mongoose.model('Suit', suitSchema)