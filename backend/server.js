import http from 'http'
import api from './src/api.js'
import database from './src/config/database.js'
import config from './src/config/index.js'

const port = config.server.port
const server = http.createServer(api)

server.on('listening', () => {
    console.log(`Servidor en ${port}`);
})

server.on('error', (err) => {
    console.log('Ah ocurrido un error en el servidor', err);
})

server.listen(port)

database()