import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import HighligtedBook from "../components/books/HighligtedBook";

const BookDetail = () => {
  let [loadedBooks, setloadedBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/book")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const books = [];

        for (const key in data) {
          const book = {
            id: key,
            ...data[key],
          };

          books.push(book);
        }
        setloadedBooks(books);
      });
  }, []);
  const params = useParams();

  const book = loadedBooks.find(
    (quote) => quote.id === parseInt(params.quoteId)
  );
  if (!book) {
    return (
      <div>
        <p> Książka została usunięta </p>
        <Link to={`/`}>
          <button>Wróc </button>
        </Link>
      </div>
    );
  }

  return (
    <HighligtedBook
      author={book.author}
      id={book.id}
      image_url={book.image_url}
      title={book.title}
      release_date={book.release_date}
      description={book.description}
      genre={book.genre}
      rating_sum={book.rating_sum}
      rating_count={book.rating_count}
    />
  );
};

export default BookDetail;
