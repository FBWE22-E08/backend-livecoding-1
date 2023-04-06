import { StatusCodes } from "http-status-codes"

export const checkValidId = (req, res, next) => {

    if(isNaN(req.params.id)){
        return res.status(StatusCodes.BAD_REQUEST).json({message:'Bad request: badly formed ID'});
    }

    next();
}