import express from 'express';
import { listHotels } from '../controllers/hotelController.js';

const router = express.Router();

//GET:
router.get('/', listHotels);

export default router;