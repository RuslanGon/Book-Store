import React from 'react'
import css from './BookCard.module.css';
import { Link } from 'react-router-dom';


const BookCard = ({book, bar}) => {

 const{ name, author, imageUrl} = book
    
  return (
    <div className={css.book_card}>
      <img className={css.book_image} src={imageUrl} alt={name} />
      <div className={css.book_details}>
        <h3>{name}</h3>
        <p>{author}</p>
      </div>
      {bar === "admin" && (
        <div className={css.book_actions}>
          <button>
            <Link to={`/book/${book._id}`}>edit</Link>
          </button>
          <button>
            <Link to={`/delete/${book._id}`}>delete</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default BookCard