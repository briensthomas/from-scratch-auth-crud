import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchBookById, editBook, deleteBook } from './services/fetch-utils';


export default function DetailPage() {
  const { id } = useParams();
  const { push } = useHistory();
  
  const [bookDetails, setBookDetails] = useState({});

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  
  useEffect(() => {
    async function getBook() {
      const book = await fetchBookById(id);

      setBookDetails(book);

      setTitle(book.title);
      setAuthor(book.author);
      setGenre(book.genre);

    }
    getBook();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    await editBook({
      title: title,
      author: author,
      genre: genre
    }, id);

    setTitle('');
    setAuthor('');
    setGenre('');

    push('/books');
  }

  async function handleDelete() {
    await deleteBook(id);

    push('/books');
  }

  return (
    <div>
      <h2>{bookDetails.title}</h2>
      <h3>Author: {bookDetails.author}</h3>
      <h3>Genre: {bookDetails.genre}</h3>
      <hr />

      <form onSubmit={handleSubmit}>
        <label> Change Title
          <input value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label> Edit Author:
          <input value={author}
            onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <label> Edit Genre:
          <input value={genre}
            onChange={(e) => setGenre(e.target.value)} />
        </label>
        <button>Submit Changes</button>
      </form>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}
