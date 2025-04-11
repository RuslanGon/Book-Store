import express from "express";
import BookModel from '../models/Book.js';

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { name, author, imageUrl } = req.body;

    if (!name || !author || !imageUrl) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const newBook = new BookModel({
      name,
      author,
      imageUrl,
    });
    await newBook.save();
    return res.status(201).json({
      added: true,
      book: newBook,
    });
  } catch (error) {
    console.error("Add book error:", error.message);
    return res.status(500).json({ message: "Error adding book" });
  }
});

router.get('/books', async (req, res) => {
  try {
    const books = await BookModel.find();
    return res.json({ books });
  } catch (error) {
    console.error("Get books error:", error.message);
    return res.status(500).json({ message: "Error getting books" });
  }
});

export { router as BookRouter };
