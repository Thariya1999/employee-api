<<<<<<< HEAD
import express from 'express'
import authMiddleware from '../middleware/authMiddlware.js'
import { changePassword } from '../controllers/settingController.js'

const router = express.Router()

router.put('/change-password', authMiddleware, changePassword)


=======
import express from 'express'
import authMiddleware from '../middleware/authMiddlware.js'
import { changePassword } from '../controllers/settingController.js'

const router = express.Router()

router.put('/change-password', authMiddleware, changePassword)


>>>>>>> 1b660d780aa4b77e8ec813678f3b011304ec02a5
export default router