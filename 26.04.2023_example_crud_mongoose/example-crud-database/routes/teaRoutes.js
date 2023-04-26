import express from 'express';
import { createTea, getListOfTeas, getTeaById, updateTea } from '../controllers/teaController.js';

const router = express.Router();
//GET list of teas
router.get('/', getListOfTeas);
//GET tea by Id
router.get('/:id', getTeaById);
//POST create new tea
router.post('/create', createTea);

//PATCH update name description and price
router.patch('/update/:id',updateTea);


export default router;
