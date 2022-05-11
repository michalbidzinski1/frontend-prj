import BookItem from "./BookItem";
import classes from "./BookList.module.scss";

function BookList(props) {
  return (
    <div className={classes.list}>
      {props.books.map((book) => (
        <BookItem
          key={book.id}
          author={book.author}
          id={book.id}
          image_url={book.image_url}
          title={book.title}
          release_date={book.release_date}
          description={book.description}
          genre={book.genre}
          rating_sum={book.rating_sum}
          rating_count={book.rating_count}
          score={book.score}
        />
      ))}
    </div>
  );
}

export default BookList;
