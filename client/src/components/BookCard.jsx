import React from 'react'
import css from './BookCard.module.css';


const BookCard = ({book}) => {

 const{ name, author, imageUrl} = book
    
  return (
    <div className={css.book_card} >
        <img className={css.book_image} src={imageUrl} alt={name} />
        <div className={css.book_details}>
            <h3>{name}</h3>
            <p>{author}</p>
        </div>
    </div>
  )
}

export default BookCard