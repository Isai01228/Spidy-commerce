import dotenv from 'dotenv'

dotenv.config({})

export default {
    database: {
        uri: process.env.DB_URI,
        name: process.env.DB_Name
    },
    server: {
        port: process.env.PORT
    },
    token: {
        secret: process.env.TOKEN_SECRET
    }
}