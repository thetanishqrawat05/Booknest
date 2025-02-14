import express from 'express';
import { getBook, sellBook , getBooksByUser, getBookById} from '../controller/book.controller.js';
const router=express.Router();

router.get("/",getBook);
router.post('/sell', sellBook);
router.get('/profile', getBooksByUser);
router.get('/buy/:id', getBookById);
export default router;