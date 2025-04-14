import axios from "axios"
import { useEffect, useState } from "react"
import css from './Books.module.css';
import BookCard from "./BookCard.jsx";


const Books = ({bar}) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("https://book-store-gih2.onrender.com/book/books");
        // http://localhost:3001/book/books
        setBooks(res.data.books);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className={css.book_list}>
      {books.map((book) => (
        <BookCard key={book._id} book={book} bar={bar} />
      ))}
    </div>
  );
}

export default Books