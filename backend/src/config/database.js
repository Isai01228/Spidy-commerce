import mongoose from "mongoose"
import config from "./index.js"

const db = mongoose.connection

db.on('connected', () => {
    console.log('Se ah conectado la base de datos');
})

export default () => {
    mongoose.connect(`${config.database.uri}/${config.database.name}`)
}