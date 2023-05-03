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

export default {listHotels};