<<<<<<< HEAD
import express from 'express'
import authMiddleware from '../middleware/authMiddlware.js'
import { addDepartment, getDepartments, updateDepartment, getDepartment, deleteDepartment } from '../controllers/departmentController.js'

const router = express.Router()

router.get('/', authMiddleware, getDepartments)
router.post('/add', authMiddleware, addDepartment)
router.get('/:id', authMiddleware, getDepartment)
router.put('/:id', authMiddleware, updateDepartment)
router.delete('/:id', authMiddleware, deleteDepartment)

=======
import express from 'express'
import authMiddleware from '../middleware/authMiddlware.js'
import { addDepartment, getDepartments, updateDepartment, getDepartment, deleteDepartment } from '../controllers/departmentController.js'

const router = express.Router()

router.get('/', authMiddleware, getDepartments)
router.post('/add', authMiddleware, addDepartment)
router.get('/:id', authMiddleware, getDepartment)
router.put('/:id', authMiddleware, updateDepartment)
router.delete('/:id', authMiddleware, deleteDepartment)

>>>>>>> 1b660d780aa4b77e8ec813678f3b011304ec02a5
export default router