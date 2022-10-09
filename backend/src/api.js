import express from 'express'
import cors from 'cors'
import {usersRoutes, messagesRoutes, suitsRoutes}  from './routes/index.js'

const api = express()

api.use(express.json())
api.use(express.urlencoded({extended: true}))

api.use(cors())

api.get('/api', (_, res) => {
    return res.json({
        msg: 'Api funcionando'
    })
})

api.use('/api/users', usersRoutes)
api.use('/api/messages', messagesRoutes)
api.use('/api/suits', suitsRoutes)


export default api