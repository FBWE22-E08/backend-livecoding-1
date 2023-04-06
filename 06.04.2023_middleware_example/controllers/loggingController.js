import { StatusCodes } from "http-status-codes"
import {promises as fsPromises} from 'fs'

/**
 * Test function for our middleware
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const loggingEntry = (req, res) => {
    return res.status(StatusCodes.OK).json({message:'Welcome to the root route'});
}

/**
 * Controller function to view the log of requests
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const viewLog = async (req, res) => {
    const fileContent = await fsPromises.readFile("log.txt",'utf-8');

    
    return res.status(StatusCodes.OK).json({message:'dump of the log', content:fileContent});
}