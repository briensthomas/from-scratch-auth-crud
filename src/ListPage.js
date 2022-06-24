import { useState, useEffect } from 'react';
import { fetchBooks } from './services/fetch-utils';
import Book from './Book.js';

export default function ListPage() {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    async function getBooks() {
      const books = await fetchBooks();
      
      setBooks(books);
    }
    getBooks();
  }, []);


  return (
    <div className='book-list'>
      {
        books.map((book, i) => <Book 
          key={book.title + i} 
          book={book} />)
      }
    </div>
  );
}
