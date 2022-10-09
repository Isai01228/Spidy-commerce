import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
})

export default mongoose.model('Message', messageSchema)