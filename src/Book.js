import React from 'react';

export function Book({ book }) {
  return (
    <div className='book-card'>
      <h3>{book.title}</h3>
      <h4>By: {book.author}</h4>
      <h4>Genre: {book.genre} </h4>
    </div>
  );
}
