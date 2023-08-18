import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);//post is used to create new
router.get('/:id', getPost);//get is used to read
router.patch('/:id', updatePost);//patch is used to update
router.delete('/:id', deletePost);//delete is used to delete existing
// router.get('/:id/likePost', likePost);
router.patch('/:id/likePost', likePost);

export default router;