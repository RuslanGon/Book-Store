import React, { useEffect, useState } from 'react';
import css from './AddBook.module.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

axios.defaults.withCredentials = true;

const EditBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        console.log(id);
        const res = await axios.get(`http://localhost:3001/book/book/${id}`);
        // console.log(res);
        setName(res.data.name); 
        setAuthor(res.data.author);
        setImageUrl(res.data.imageUrl);
        setErrorMessage('');
      } catch (error) {
        console.error("Error fetching book:", error);
        setErrorMessage("Failed to load book.");
      }
    };
  
    fetchBook();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !author || !imageUrl) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      const res = await axios.patch(`http://localhost:3001/book/${id}`, {
        name,
        author,
        imageUrl
      });

      console.log("Response from backend:", res.data);

      if (res.data.updated) {
        setErrorMessage('');
        navigate("/books");
      } else {
        setErrorMessage("Failed to update the book.");
      }
    } catch (error) {
      console.error("Error while updating book:", error);
      setErrorMessage("Failed to update the book. Please try again.");
    }
  };

  return (
    <div className={css.student_form_container}>
      <form className={css.student_form} onSubmit={handleSubmit}>
        <h2>Edit Book</h2>
        <div className={css.student_group}>
          <label htmlFor="name">Book Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={css.student_group}>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className={css.student_group}>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button type="submit">Update Book</button>
        {errorMessage && <p className={css.error}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default EditBook;
