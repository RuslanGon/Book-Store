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

router.get("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await BookModel.findById(id); 
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.json({ book });
  } catch (error) {
    console.error("Get book error:", error.message);
    return res.status(500).json({ message: "Error getting book" });
  }
});

router.put("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await BookModel.findByIdAndUpdate(id, req.body)
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.json({ updated: true, book });
  } catch (error) {
    console.error("Get book error:", error.message);
    return res.status(500).json({ message: "Error getting book" });
  }
});



export { router as BookRouter };
