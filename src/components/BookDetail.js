import React from 'react';
import './BookDetail.css';

const BookDetail = ({ book }) => {
  return (
    <div className="book-detail">
      <img src={book.image} alt={book.title} className="book-image" />
      <div className="book-info">
        <h2>{book.title}</h2>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Price:</strong> {book.price}</p>
        <p><strong>Description:</strong> {book.description}</p>
      </div>
    </div>
  );
};

export default BookDetail;
