/**
 * Here we will define all our controller methods which will handle request logic 
 */
import { StatusCodes } from 'http-status-codes'
import Tea from '../models/Tea.js';


/**
 * Controller method to get a list of teas
 * @param {*} req 
 * @param {*} res 
 */
export const getListOfTeas = async (req ,res) => {
   const teas = await Tea.find();
    
   return res.status(StatusCodes.OK).json(teas);
}

/**
 * Controller method to get a tea by id
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const getTeaById = async(req, res) => {
    const tea = await Tea.findById(req.params.id);

    if(!tea){
        return res.status(StatusCodes.NOT_FOUND).json("Tea not found");
    }

    return res.status(StatusCodes.OK).json(tea);
}

/**
 * Controller method to create a new tea
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const createTea = async(req, res) => {
    try {
        //use the create method to create a new Tea inside the teas collection
        const resultTea = await Tea.create({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            brand:req.body.brand,
            category:req.body.category
        });

        return res.status(StatusCodes.CREATED).json({message:'Tea was created', createdTea:resultTea})

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error happened', error:error.toString()})
    }
}
/**
 * Controller function to update a tea 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const updateTea = async(req, res) => {
    try {
        const tea = await Tea.findByIdAndUpdate(req.params.id,{
            name:req.body.name, 
            description:req.body.description,
            price:req.body.price
        },{new:true});

        if(!tea){
            return res.status(StatusCodes.NOT_FOUND).json("Tea not found");
        }

        return res.status(StatusCodes.OK).json({message:'Tea updated', updatedTea:tea})
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error happened', error:error.toString()})
    }
}

export default {getListOfTeas, createTea, getTeaById, updateTea}