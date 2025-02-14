// routes/ratings.js
import express from "express";
import {
  addRating,
  getRatingsByBook,
} from "../controller/ratings.contoller.js";
import { sellBook } from "../controller/book.controller.js";

const router = express.Router();

// Route to add a rating/comment
router.post("/ratings/:id", addRating);

// Route to get all ratings/comments for a specific book
router.get("/ratings/:id", getRatingsByBook);
router.post("/sell",sellBook)

export default router;
