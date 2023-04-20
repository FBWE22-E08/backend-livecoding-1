import express from 'express';
import {body} from 'express-validator';



import controller from '../controllers/exampleController.js';
//importing the validateuser middleware
import { sanitizeUser, validateUser } from '../middleware/uservalidation.js';

const router = express.Router();

router.get('/', controller.getRootExample);


router.post('/validateuser',body('email').isEmail().normalizeEmail(), body('password').isStrongPassword({minLength:10}), controller.validateUser)

//use the new middleware function to validate the user
router.post('/register', validateUser, sanitizeUser, controller.registerUser);

export default router;