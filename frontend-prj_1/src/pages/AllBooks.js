import { useState, useEffect } from "react";
import classes from "./AllBooks.module.scss";
import axios from "axios";
import BookList from "../components/books/BookList";

function AllBooksPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBooks, setloadedBooks] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:5000/api/book")
      .then((response) => setloadedBooks(response.data));
    setIsLoading(false);
  }, []);
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("title");
  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        title: "title",
        release_date: "release_date",
        rating: "rating",
      };
      const sortProperty = types[type];
      const sorted = [...loadedBooks].sort((a, b) =>
        ("" + a[sortProperty]).localeCompare("" + b[sortProperty])
      );
      setData(sorted);
    };

    sortArray(sortType);
  }, [loadedBooks, sortType]);

  if (isLoading) {
    return (
      <section>
        <p>Ładowanie strony...</p>
      </section>
    );
  }

  return (
    <section className={classes.section}>
      <h1 className={classes.h1}>KSIĄŻKI</h1>
      Sortuj:{" "}
      <select
        className={classes.select}
        defaultValue="Sort"
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="title">Alfabetycznie</option>
        <option value="release_date">wg. daty</option>
        <option value="rating">wg. ocen</option>
      </select>
      <BookList books={data} />
    </section>
  );
}

export default AllBooksPage;
