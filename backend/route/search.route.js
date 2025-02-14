// routes/search.js
import express from 'express';
import { searchBooks } from '../controller/search.controller.js';

const router = express.Router();

// Define the search route
router.get('/search', searchBooks);

export default router;
