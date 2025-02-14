import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  category: String,
  available: String,
  image: String,
  author: String,
  comments: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Link to the seller's user ID
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
