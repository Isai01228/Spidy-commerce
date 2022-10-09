import express from 'express'

import {suitController} from '../controllers/index.js'

const router = express.Router()

router
.route('/')
.post(suitController.createSuit)
.get(suitController.getAllSuits)

router
.route('/:id')
.get(suitController.getSuitById)
.put(suitController.updateSuitById)
.delete(suitController.deletSuitById)

export default router