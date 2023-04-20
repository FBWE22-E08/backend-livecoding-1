import { validationResult } from 'express-validator';
import {StatusCodes} from 'http-status-codes';
/**
 * This is the root controller method for the example
 * @param {*} req 
 * @param {*} res 
 */
export const getRootExample = (req,res) => {
    return res.status(StatusCodes.OK).send("Welcome to the example routes");
}

/**
 * Controller method to validate the user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const validateUser = (req, res) => {
    //use the validationResult method to see the results of our validation middleware
    const errors = validationResult(req);

    //in the case we have errors the errors are not empty
    if(!errors.isEmpty()){
        //send back the errors we had to the client as a response.
        return res.status(StatusCodes.BAD_REQUEST).json({errors: errors.array()})
    }

    const {email, password} = req.body;

    const user = {
        email:email,
        password:password
    };

    return res.status(StatusCodes.OK).json({message:'User was added', userObject:user})
}

/**
 * Controller method to register a user.
 * @param {*} req 
 * @param {*} res 
 */
export const registerUser = (req, res) => {
    const {firstname, lastname, email, phone} = req.body;

    const user = {
        firstname:firstname,
        lastname:lastname,
        email:email, 
        phone:phone
    };

    return res.status(StatusCodes.CREATED).json({user:user});
}


export default {getRootExample, validateUser, registerUser};