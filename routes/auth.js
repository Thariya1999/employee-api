<<<<<<< HEAD
import express from 'express'
import { login, verify } from '../controllers/authController.js'
import authMiddleware from '../middleware/authMiddlware.js'

const router= express.Router()

router.post('/login', login)
router.get('/verify', authMiddleware, verify)

=======
import express from 'express'
import { login, verify } from '../controllers/authController.js'
import authMiddleware from '../middleware/authMiddlware.js'

const router= express.Router()

router.post('/login', login)
router.get('/verify', authMiddleware, verify)

>>>>>>> 1b660d780aa4b77e8ec813678f3b011304ec02a5
export default router;