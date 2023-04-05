import teas from './../teadata.js';
import { StatusCodes } from 'http-status-codes';
/**
 * Get the list of teas
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const getListOfTea = (req, res) => {
   //status code 200 OK         //send the teas converted into json.
   //return res.status(200).json(teas);
   return res.status(StatusCodes.OK).json(teas);
}

/**
 * Get a tea by id 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const getTeaById = (req,res) => {
   //find the tea by id 
   const tea = teas.find(tea => tea.id == req.params.id); //getting the id from the URI

   if(!tea){ //no tea was found with this id
      return res.status(StatusCodes.NOT_FOUND).json("Tea not found");
   }
   //returning status OK + the tea we found
   return res.status(StatusCodes.OK).json(tea);
}

/**
 * Creates a new tea 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const createTea = (req, res) => {
   console.log("the body is ", req.body);
   //create a new tea object
   const tea = {
      id:req.body.id,
      name:req.body.name
   }
   //add it to the array 
   teas.push(tea);

   //return the new list of teas
   return res.status(StatusCodes.CREATED).json({newList:teas});
}


export default {getListOfTea, getTeaById, createTea}