<<<<<<< HEAD
import express from 'express'
import authMiddleware from '../middleware/authMiddlware.js'
import { addSalary, getSalary } from '../controllers/salaryController.js'

const router = express.Router()

router.post('/add', authMiddleware, addSalary)
router.get('/:id/:role', authMiddleware, getSalary)


=======
import express from 'express'
import authMiddleware from '../middleware/authMiddlware.js'
import { addSalary, getSalary } from '../controllers/salaryController.js'

const router = express.Router()

router.post('/add', authMiddleware, addSalary)
router.get('/:id/:role', authMiddleware, getSalary)


>>>>>>> 1b660d780aa4b77e8ec813678f3b011304ec02a5
export default router