import express from 'express';
import { findUser, getAllUsers } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/find', findUser);

export default router;