import express from 'express';
import { createHotel, createRoom, listHotels } from '../controllers/hotelController.js';

const router = express.Router();

//GET:: list of hotels 
router.get('/', listHotels);

//POST:: create a new hotel
//insert a new hotel into hotels collection
router.post('/create', createHotel)

//PATCH:: update hotel, add new room to the hotel 
router.patch('/create-room/:id', createRoom)

export default router;