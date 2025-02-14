import express from 'express';
import {
  createBlogPost,
  getBlogPosts,
  updateBlogPost,
  deleteBlogPost,
} from '../controller/blog.controller.js';


const router = express.Router();

router.get('/', getBlogPosts); // Get all blog posts
router.post('/', createBlogPost); // Create a new blog post
router.put('/:id', updateBlogPost); // Update a blog post
router.delete('/:id', deleteBlogPost); // Delete a blog post

export default router;
