<<<<<<< HEAD
import express from 'express'
import authMiddleware from '../middleware/authMiddlware.js'
import { getSummary } from '../controllers/dashboardController.js';

const router = express.Router()

router.get('/summary', authMiddleware, getSummary)

=======
import express from 'express'
import authMiddleware from '../middleware/authMiddlware.js'
import { getSummary } from '../controllers/dashboardController.js';

const router = express.Router()

router.get('/summary', authMiddleware, getSummary)

>>>>>>> 1b660d780aa4b77e8ec813678f3b011304ec02a5
export default router;