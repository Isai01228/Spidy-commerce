import express from 'express'
import {messageController} from '../controllers/index.js'
import {messageValidator} from '../middlewares/index.js'

const router = express.Router()

router
.route('/suits/:id/messages')
.get(messageController.getMessageById)

router.post('/suits/:id/messages', messageValidator, messageController.crateMessage)
router.delete('/suits/:id/message/:messageId', messageController.deleteMsgById)

router
.route('/')
.get(messageController.getAllMsg)

export default router