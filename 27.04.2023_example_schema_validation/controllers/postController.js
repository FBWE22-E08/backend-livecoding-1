import { StatusCodes} from 'http-status-codes'
/**
 * Controller method to get a list of posts
 * @param {*} req 
 * @param {*} res 
 */
export const getPosts = (req, res) => {
    return res.status(StatusCodes.OK).json("It works");
}

export default {getPosts}