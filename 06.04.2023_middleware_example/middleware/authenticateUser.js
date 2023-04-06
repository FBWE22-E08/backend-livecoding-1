import { StatusCodes } from "http-status-codes"

/**
 * Middleware to authenticate a user. We want the user to provide a secret
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const authenticate = (req, res, next) => {
    console.log("request body", req.body);
    if(req.body.secret == null){
        //the user did not provide any credentials
        return res.status(StatusCodes.UNAUTHORIZED).json({responsecode:401, responsemessage:'Unauthorized'});
    }

    console.log("permission granted to this route");

    next(); //allow the user to go to the next route/middleware function.
}