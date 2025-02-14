// controllers/ratingsController.js
import Rating from "../model/rating.model.js"; // Correct path to the model

// Add rating
export const addRating = async (req, res) => {
  try {
    const { bookId, userId, rating, comment } = req.body;
    const newRating = new Rating({ bookId, userId, rating, comment });
    await newRating.save();
    res.status(201).json(newRating); // Send the saved rating back to the client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding rating" });
  }
};

// Controller to get all ratings/comments for a specific book
export const getRatingsByBook = async (req, res) => {
  try {
    const bookId = req.params.id;  // Get bookId from URL parameter
    const ratings = await Rating.find({ bookId }).populate(
      "userId", // Populate the user's info (optional)
      "fullname" // Specify fields to retrieve if needed
    );
    res.json(ratings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching ratings" });
  }
};

