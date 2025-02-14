import Book from '../model/book.model.js'; // Import the Book model

export const searchBooks = async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) {
      return res.json([]);  // Return empty if no query is provided
    }

    // Escape special characters in the query to avoid RegExp errors
    const escapedQuery = query.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    
    // Perform the search with case-insensitivity
    const books = await Book.find({ name: new RegExp(escapedQuery, 'i') });
    res.json(books);  // Send back the found books
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
