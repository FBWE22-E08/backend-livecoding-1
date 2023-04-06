import express from 'express';
import { loggingEntry, viewLog } from '../controllers/loggingController.js';
import { logCombination, logging, loggingtime } from '../middleware/logging.js';
import { authenticate } from '../middleware/authenticateUser.js';

const router = express.Router();



router.get('/',logCombination, loggingEntry);

router.get('/viewlog', authenticate, viewLog);

export default router;