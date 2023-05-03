import {StatusCodes} from 'http-status-codes';
import Hotel from '../models/Hotel.js';


/**
 * Controller method to show a list of hotels to the client.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const listHotels = async(req, res) => {
    const hotels = await Hotel.find();

    return res.status(StatusCodes.OK).json(hotels);
}

/**
 * Controller method to create a new hotel and add it to our collection
 * @param {*} req 
 * @param {*} res 
 */
export const createHotel = async(req, res) => {
   try {
    const createdHotel = await Hotel.create({
       name:req.body.name, 
       description:req.body.description, 
       location:req.body.location,
       stars:req.body.stars, 
       amenities:req.body.amenities
    });

    return res.status(StatusCodes.OK).json({message:'Hotel created', createdHotel})

   } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:error.toString()})
   }
}
/**
 * Controller method to add room to the hotel by id
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const createRoom = async(req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{
            $push:{
               rooms:{
                 name:req.body.name,
                 description:req.body.description,
                 roomSize:req.body.roomSize,
                 sleeps:req.body.sleeps, 
                 bedSize:req.body.bedSize,
                 view:req.body.view,
                 hasBalcony:req.body.hasBalcony,
                 price:req.body.price,
                 avgRating:req.body.avgRating
               } 
            }
        },{new:true})

        return res.status(200).json({message:'Room created', updatedHotel})

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:error.toString()})
    }
}


export default {listHotels};