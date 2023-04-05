import express from 'express';
import { createTea, getListOfTea, getTeaById } from '../controllers/teaController.js';

//declare the express router
const router = express.Router();

//DECLARE ROUTE ENDPOINTS 
//LISTEN FOR AN HTTP GET request on ROOT / 
router.get('/', getListOfTea);
router.get('/:id',getTeaById);

//POST request to create a new tea. 
router.post('/create', createTea);

//MVC = Model-View-Controller

//make the default export
export default router;