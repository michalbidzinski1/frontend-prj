import { useRef } from "react";

import Form from "../ui/Form";
import classes from "./NewBookForm.module.scss";

function NewBookForm(props) {
  const titleInputRef = useRef();
  const authorInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const genreInputRef = useRef();
  const release_dateInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredAuthor = authorInputRef.current.value;
    const enteredGenre = genreInputRef.current.value;
    const enteredRelease_date = release_dateInputRef.current.value;

    const bookData = {
      title: enteredTitle,
      image_url: enteredImage,
      description: enteredDescription,
      author: enteredAuthor,
      genre: enteredGenre,
      release_date: enteredRelease_date,
    };

    props.onAddBook(bookData);
  }

  return (
    <Form>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="release_date">Data</label>
          <input
            type="date"
            required
            id="release_date"
            ref={release_dateInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="genre">Gatunek </label>
          <input type="text" required id="genre" ref={genreInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title"> Tytuł </label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="author">Autor</label>
          <input type="text" required id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image_url">Zdjęcie</label>
          <input type="url" required id="image_url" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Opis</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Zatwierdź</button>
        </div>
      </form>
    </Form>
  );
}

export default NewBookForm;
