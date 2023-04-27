import express from 'express';
import { createPost, getPosts } from '../controllers/postController.js';

//defining our router module
const router = express.Router();

//GET list of posts
router.get('/', getPosts);

//POST create a new post
router.post('/create', createPost);


export default router;