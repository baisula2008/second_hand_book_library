import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Price: {book.price}</p>
    </div>
  );
};

export default BookItem;
