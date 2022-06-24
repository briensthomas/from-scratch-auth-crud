import React from 'react';

export default function Book({ book: { 
  title, author, genre } }) {
  return (
    <div className='book-card'>
      <h3>{title}</h3>
      <h4>By: {author}</h4>
      <h4>Genre: {genre} </h4>
    </div>
  );
}
