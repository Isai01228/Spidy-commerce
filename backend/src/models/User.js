
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: String,
    lastName: String,
    idNum: {
        type: Number,
        required: [true, 'Id number necessary']
    },

    phone: Number,

    email: {
        type: String,
        unique: true,
        required: [true, 'Mail necessary']
    },

    password: {
        type: String,
        required: [true, 'Password required']
    },

    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }

})

const UserModel = mongoose.model('User', userSchema)

export default UserModel