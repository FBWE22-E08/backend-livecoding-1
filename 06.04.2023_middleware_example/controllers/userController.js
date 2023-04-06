import { StatusCodes } from 'http-status-codes';
import users from './../userdata.js';

/**
 * Getting all the users from our in-memory database
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const getAllUsers = (req, res) => {
    return res.status(StatusCodes.OK).json(users);
}

/**
 * Finding a user with a specific email address (?email=somemail@test.com)
 * @param {*} req 
 * @param {*} res 
 */
export const findUser = (req, res) => {
    //get access to query parameter 
    console.log("the query parameter is", req.query);
    const {email} = req.query; 

    const listUsers = users.filter(item => item.email === email);

    if(listUsers.length < 1){
        return res.status(StatusCodes.NOT_FOUND).json({message:'No user with that email found'});
    }

    return res.status(StatusCodes.OK).json(listUsers);

}

export default {getAllUsers}