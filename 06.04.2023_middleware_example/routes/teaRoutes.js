import express from 'express';
import { createTea, getListOfTea, getTeaById } from '../controllers/teaController.js';
import { authenticate } from '../middleware/authenticateUser.js';
import { loggingtime } from '../middleware/logging.js';
import { checkValidId } from '../middleware/validityCheck.js';

//declare the express router
const router = express.Router();

//DECLARE ROUTE ENDPOINTS 
//LISTEN FOR AN HTTP GET request on ROOT / 

//router.use(loggingtime); 
//activate the above to use the middleware for the full router

router.get('/', getListOfTea);
router.get('/:id', checkValidId, getTeaById);
//router.use(loggingtime); 
//activate the above to make middleware kick in for endpoints below.

//POST request to create a new tea. 
router.post('/create', createTea);

//MVC = Model-View-Controller

//make the default export
export default router;