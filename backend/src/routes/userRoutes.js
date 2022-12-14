import express from 'express'
import {userController} from '../controllers/index.js' 
import {
    createUserValidator,
    loginUserValidator,
    authValidator,
    updateUserValidator,
    protectedRoute
} from '../middlewares/index.js'

const router = express.Router()

router
.post('/', createUserValidator, userController.create)
.post('/login', loginUserValidator, userController.login)
.put('/:id',updateUserValidator, userController.updateById)
// router.delete('/:id', authValidator, userController.deleteUserById )

// router
// .route('/:id')
// .get(protectedRoute, userController.getUserByIdToken, userController.getAllUsers)

export default router