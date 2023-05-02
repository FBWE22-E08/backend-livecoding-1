import { StatusCodes } from "http-status-codes";
import Post from "../models/Post.js";

/**
 * Controller method to get a list of posts
 * @param {*} req
 * @param {*} res
 */
export const getPosts = async (req, res) => {
  //ask database for all posts inside our collection.
  const posts = await Post.find();

  return res.status(StatusCodes.OK).json(posts);
};
/**
 * Creating a new post
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const createPost = async (req, res) => {
  try {
    //creating post with certain fields using create
    const createdPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      postLocation: req.body.postLocation,
      tags: req.body.tags, //tags as an array
      code: req.body.code, // don't forget to add your field here!
    }); 

    return res
      .status(StatusCodes.CREATED)
      .json({ message: "Post created", createdPost: createdPost });

    //ALTERNATIVE WAY TO CREATE A POST
    // const createdPost2 = new Post({});
    // createdPost2.title = "something"
    // createdPost2.save();
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Error happened", error: error.toString() });
  }
};

export default { getPosts, createPost };
