import React, { useState } from 'react';
import css from './AddBook.module.css';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;

const AddBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !author || !imageUrl) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3001/book/add", {
        name,
        author,
        imageUrl
      });

      console.log("Response from backend:", res.data);

      if (res.data.success) {
        setName('');
        setAuthor('');
        setImageUrl('');
        setErrorMessage('');
        // navigate("/books");
      } else {
        setErrorMessage("Failed to add the book.");
      }
    } catch (error) {
      console.error("Error while adding book:", error);
      setErrorMessage("Failed to add the book. Please try again.");
    }
  };

  return (
    <div className={css.student_form_container}>
      <form className={css.student_form} onSubmit={handleSubmit}>
        <h2>Add Book</h2>
        <div className={css.student_group}>
          <label htmlFor="name">Book Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={css.student_group}>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className={css.student_group}>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        {errorMessage && <p className={css.error}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default AddBook;
