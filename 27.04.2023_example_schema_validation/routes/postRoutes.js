import express from 'express';
import { getPosts } from '../controllers/postController.js';

//defining our router module
const router = express.Router();

//GET list of posts
router.get('/', getPosts);


export default router;